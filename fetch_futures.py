"""
期货数据获取脚本
获取国内商品期货的周线数据 + KDJ 指标
自动识别主力和次主力合约
支持从 futures_list.json 读取品种列表
输出为 futures_data.js 供 Calculator 项目使用
"""

import akshare as ak
import json
import os
from datetime import datetime
import pandas as pd
import time


def load_futures_list(filename="futures_list.json"):
    """
    从 JSON 文件加载期货品种列表
    """
    try:
        if not os.path.exists(filename):
            print(f"配置文件 {filename} 不存在，使用默认列表")
            return None
            
        with open(filename, "r", encoding="utf-8") as f:
            futures_list = json.load(f)
            print(f"已加载 {len(futures_list)} 个期货品种")
            return futures_list
    except Exception as e:
        print(f"加载配置文件失败: {e}")
        return None


# 默认列表（如果文件不存在）
DEFAULT_FUTURES_LIST = [
    {"name": "螺纹钢", "code": "RB", "display": "螺纹钢"},
    {"name": "热卷", "code": "HC", "display": "热卷"},
    {"name": "铁矿石", "code": "I", "display": "铁矿石"},
    {"name": "焦炭", "code": "J", "display": "焦炭"},
    {"name": "焦煤", "code": "JM", "display": "焦煤"},
]


def get_main_and_sub_contracts(name):
    """
    获取某品种的主力和次主力合约代码
    
    参数:
        name: 品种中文名称（如 "螺纹钢"、"白糖"）
    
    返回:
        (主力合约代码, 次主力合约代码) 或 (None, None)
    """
    try:
        # 获取该品种所有合约的实时行情
        df = ak.futures_zh_realtime(symbol=name)
        
        if df is None or df.empty:
            return None, None
        
        # 过滤掉连续合约（以0结尾）
        df = df[~df['symbol'].str.endswith('0')]
        
        # 确保有 hold（持仓量）列
        if 'hold' not in df.columns:
            # 尝试其他可能的列名
            possible_cols = ['position', 'open_interest', 'oi']
            for col in possible_cols:
                if col in df.columns:
                    df['hold'] = df[col]
                    break
        
        if 'hold' not in df.columns or df.empty:
            return None, None
        
        # 按持仓量降序排序
        df = df.sort_values('hold', ascending=False)
        
        # 取前两个作为主力和次主力
        contracts = df['symbol'].tolist()[:2]
        
        main_contract = contracts[0] if len(contracts) >= 1 else None
        sub_contract = contracts[1] if len(contracts) >= 2 else None
        
        return main_contract, sub_contract
        
    except Exception as e:
        print(f"    获取合约列表失败: {e}")
        return None, None


def calculate_kdj(df, n=9, m1=3, m2=3):
    """
    计算 KDJ 指标
    """
    low_n = df['low'].rolling(window=n, min_periods=1).min()
    high_n = df['high'].rolling(window=n, min_periods=1).max()
    
    rsv = (df['close'] - low_n) / (high_n - low_n) * 100
    rsv = rsv.fillna(50)
    
    k = pd.Series(index=df.index, dtype=float)
    d = pd.Series(index=df.index, dtype=float)
    
    k.iloc[0] = 50
    d.iloc[0] = 50
    
    for i in range(1, len(df)):
        k.iloc[i] = (m1 - 1) / m1 * k.iloc[i-1] + 1 / m1 * rsv.iloc[i]
        d.iloc[i] = (m2 - 1) / m2 * d.iloc[i-1] + 1 / m2 * k.iloc[i]
    
    j = 3 * k - 2 * d
    
    df['K'] = round(k, 2)
    df['D'] = round(d, 2)
    df['J'] = round(j, 2)
    
    return df


def analyze_kdj_pattern(k, d, j):
    """分析 KDJ 形态"""
    patterns = []
    
    if j > 100:
        patterns.append("超买区间")
    elif j < 0:
        patterns.append("超卖区间")
    
    if k > 80 and d > 80:
        patterns.append("高位钝化")
    elif k < 20 and d < 20:
        patterns.append("低位钝化")
    
    if k > d and j > k:
        patterns.append("多头排列")
    elif k < d and j < k:
        patterns.append("空头排列")
    
    if not patterns:
        patterns.append("中性区间")
    
    return ", ".join(patterns)


def daily_to_weekly(df):
    """将日线数据转换为周线数据"""
    df = df.copy()
    
    if 'date' in df.columns:
        df['date'] = pd.to_datetime(df['date'])
        df.set_index('date', inplace=True)
    
    weekly = df.resample('W').agg({
        'open': 'first',
        'high': 'max',
        'low': 'min',
        'close': 'last',
        'volume': 'sum'
    }).dropna()
    
    weekly.reset_index(inplace=True)
    weekly['date'] = weekly['date'].dt.strftime('%Y-%m-%d')
    
    return weekly


def check_rules(df, current_kdj):
    """
    检查是否符合自定义交易规则
    df: 周线数据 DataFrame (包含 K, D, J)
    current_kdj: 最新 KDJ 数据字典
    返回: (pattern_1_status, pattern_2_status)
    """
    if len(df) < 3:
        return None, None

    # 获取最后3周的数据 (改为3根K线)
    # w3: 本周 (Current)
    # w2: 上周 (Peak/Trough)  
    # w1: 前周 (Start)
    w3 = df.iloc[-1]
    w2 = df.iloc[-2]
    w1 = df.iloc[-3]

    # 规则1：复苏/转弱 (S1)
    p1_status = None
    is_k_gt_d = current_kdj['K'] > current_kdj['D']
    is_k_lt_d = current_kdj['K'] < current_kdj['D']
    
    # S1 Long (复苏):
    # 原逻辑: w1 > w2 (Highs Descending), KDJ Gold.
    # W2, W3, W4 (Last 3). 
    # User said: "W1 > W2 (Descending) + Gold Cross". 
    # Let's use w3 and w2.
    if (w2['high'] > w3['high']) and is_k_gt_d:
        p1_status = 'long'
    # S1 Short (转弱):
    elif (w1['high'] > w2['high']) and (w2['high'] > w3['high']) and is_k_lt_d:
        p1_status = 'short'

    # 规则2：3根K线 Pending形态 (菜油类型)
    # 新增条件：做多必须KDJ金叉(K>D)，做空必须KDJ死叉(K<D)
    p2_status = None
    
    # Pattern 2 Long (Pending Setup - 3-Bar):
    # 核心逻辑:
    # 1. w2是一个显著的上涨K线 (Peak)
    # 2. w3回调但未跌破w1的低点 (Support holds)
    # 3. w3收盘未突破w2的高点 (Pending breakout)
    # 4. w3的高点低于w2 (确保w3是回调而非继续上涨)
    # 5. KDJ已经金叉 (K > D) - 新增条件
    
    # 做多Pending (3-Bar):
    # 1. w2.high > w1.high (有明显的上涨)
    # 2. w3.close > w1.low (未跌破起点支撑)
    # 3. w3.close <= w2.high (尚未突破高点)
    # 4. w3.high < w2.high (w3确实是回调)
    # 5. K > D (KDJ金叉) - 新增
    cond_pending_long = (w2['high'] > w1['high']) and \
                        (w3['close'] > w1['low']) and \
                        (w3['close'] <= w2['high']) and \
                        (w3['high'] < w2['high']) and \
                        is_k_gt_d  # 新增：必须金叉
    
    # 做多Active (已突破):
    # 同样要求KDJ金叉
    cond_active_long = (w2['high'] > w1['high']) and \
                       (w3['close'] > w2['high']) and \
                       is_k_gt_d  # 新增：必须金叉
    
    # 做空Pending (3-Bar):
    # 1. w2.low < w1.low (有明显的下跌)
    # 2. w3.close < w1.high (未突破起点阻力)
    # 3. w3.close >= w2.low (尚未跌破低点)
    # 4. w3.low > w2.low (w3确实是反弹)
    # 5. K < D (KDJ死叉) - 新增
    cond_pending_short = (w2['low'] < w1['low']) and \
                         (w3['close'] < w1['high']) and \
                         (w3['close'] >= w2['low']) and \
                         (w3['low'] > w2['low']) and \
                         is_k_lt_d  # 新增：必须死叉
    
    # 做空Active (已破位):
    # 同样要求KDJ死叉
    cond_active_short = (w2['low'] < w1['low']) and \
                        (w3['close'] < w2['low']) and \
                        is_k_lt_d  # 新增：必须死叉
    
    if cond_active_long:
        p2_status = 'long'
    elif cond_pending_long:
        p2_status = 'pending_long'
    elif cond_active_short:
        p2_status = 'short'
    elif cond_pending_short:
        p2_status = 'pending_short'
        
    return p1_status, p2_status


def fetch_contract_data(symbol, contract_type="主力"):
    """
    获取单个合约的周线数据和 KDJ 指标
    """
    try:
        df = ak.futures_zh_daily_sina(symbol=symbol)
        
        if df is None or df.empty:
            return None
        
        df.columns = [col.lower() for col in df.columns]
        df = df.tail(90)  # 约4个月的日线数据
        
        weekly_df = daily_to_weekly(df)
        weekly_df = weekly_df.tail(13)  # 约3个月的周线
        
        if weekly_df.empty:
            return None
        
        # 计算 KDJ
        weekly_df = calculate_kdj(weekly_df)
        
        # 获取最新KDJ数据
        latest_kdj = {
            'K': weekly_df.iloc[-1]['K'],
            'D': weekly_df.iloc[-1]['D'],
            'J': weekly_df.iloc[-1]['J'],
            'pattern': analyze_kdj_pattern(weekly_df.iloc[-1]['K'], weekly_df.iloc[-1]['D'], weekly_df.iloc[-1]['J'])
        }

        # 检查自定义规则
        p1, p2 = check_rules(weekly_df, latest_kdj)
        latest_kdj['custom_rule_1'] = p1  # 'long' or 'short' or None
        latest_kdj['custom_rule_2'] = p2  # 'long' or 'short' or None

        records = []
        for _, row in weekly_df.iterrows():
            records.append({
                "date": str(row["date"]),
                "open": float(row["open"]),
                "high": float(row["high"]),
                "low": float(row["low"]),
                "close": float(row["close"]),
                "volume": int(row["volume"]) if pd.notna(row["volume"]) else 0,
                "K": float(row["K"]),
                "D": float(row["D"]),
                "J": float(row["J"]),
            })
        
        return {
            "symbol": symbol,
            "contractType": contract_type,
            "lastUpdate": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "latestKDJ": latest_kdj,
            "data": records
        }
        
    except Exception as e:
        print(f"    获取 {symbol} 数据失败: {e}")
        return None


def fetch_futures_data():
    """获取所有期货品种的主力和次主力合约数据"""
    
    # 优先从文件加载
    futures_list = load_futures_list()
    if futures_list is None:
        futures_list = DEFAULT_FUTURES_LIST
    
    all_data = {}
    
    total = len(futures_list)
    print(f"\n即将开始获取 {total} 个品种的数据...")
    
    for i, future in enumerate(futures_list, 1):
        name = future["name"]
        code = future["code"]
        display = future.get("display", name)
        
        print(f"\n[{i}/{total}] 正在获取 {display} ({code}) 的数据...")
        
        # 获取主力和次主力合约代码
        main_contract, sub_contract = get_main_and_sub_contracts(name)
        
        if main_contract:
            print(f"  主力合约: {main_contract}")
        else:
            main_contract = f"{code}0"  # 回退到连续合约
            print(f"  主力合约: {main_contract} (连续合约)")
        
        if sub_contract:
            print(f"  次主力合约: {sub_contract}")
        else:
            print(f"  次主力合约: 无")
        
        # 获取主力合约数据
        print(f"  正在获取主力合约数据...")
        main_data = fetch_contract_data(main_contract, "主力")
        if main_data:
            print(f"    ✓ 主力: K={main_data['latestKDJ']['K']:.1f}, D={main_data['latestKDJ']['D']:.1f}, J={main_data['latestKDJ']['J']:.1f} ({main_data['latestKDJ']['pattern']})")
        else:
            print(f"    ✗ 主力数据获取失败")
        
        # 获取次主力合约数据
        sub_data = None
        if sub_contract:
            print(f"  正在获取次主力合约数据...")
            time.sleep(0.5)  # 避免请求过快
            sub_data = fetch_contract_data(sub_contract, "次主力")
            if sub_data:
                print(f"    ✓ 次主力: K={sub_data['latestKDJ']['K']:.1f}, D={sub_data['latestKDJ']['D']:.1f}, J={sub_data['latestKDJ']['J']:.1f} ({sub_data['latestKDJ']['pattern']})")
            else:
                print(f"    ✗ 次主力数据获取失败")
        
        # 存储数据
        all_data[code] = {
            "name": display.split(" (")[0],  # 只要中文名
            "code": code,
            "period": "weekly",
            "main": main_data,
            "sub": sub_data
        }
        
        time.sleep(0.5)  # 避免请求过快
        
        # 每3个品种保存一次
        if i % 3 == 0:
            save_to_js(all_data)
            print("  (自动保存进度)")
    
    return all_data


def save_to_js(data, filename="futures_data.js"):
    """保存为 JavaScript 文件"""
    js_content = f"""// 期货周线数据 + KDJ 指标（主力 + 次主力合约）
// 更新时间: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
// 数据来源: 新浪财经 (via AKShare)
// 周期: 周线 (最近3个月)

const FUTURES_DATA = {json.dumps(data, ensure_ascii=False, indent=2)};

// 导出（如果在 Node.js 环境）
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = FUTURES_DATA;
}}
"""
    
    with open(filename, "w", encoding="utf-8") as f:
        f.write(js_content)
    
    print(f"\n✓ 数据已保存到 {filename}")


if __name__ == "__main__":
    print("=" * 60)
    print("期货周线数据 + KDJ 指标获取脚本")
    print("（包含主力和次主力合约，动态读取列表）")
    print(f"运行时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)
    
    data = fetch_futures_data()
    save_to_js(data)
    
    print("\n" + "=" * 60)
    print("完成！")
    print("=" * 60)
