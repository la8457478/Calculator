"""
仅仅重新获取缺失的期货数据，并合并到 futures_data.js
Strategies:
1. Standard `futures_zh_daily_sina`
2. Fallback `futures_zh_minute_sina` (60min) -> Resample to Weekly
"""
import akshare as ak
import json
import os
import pandas as pd
import time
from datetime import datetime

# --- 核心函数复用 ---

def calculate_kdj(df, n=9, m1=3, m2=3):
    if len(df) < n: return df
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
    patterns = []
    if j > 100: patterns.append("超买区间")
    elif j < 0: patterns.append("超卖区间")
    if k > 80 and d > 80: patterns.append("高位钝化")
    elif k < 20 and d < 20: patterns.append("低位钝化")
    if k > d and j > k: patterns.append("多头排列")
    elif k < d and j < k: patterns.append("空头排列")
    return ", ".join(patterns) if patterns else "中性区间"

def check_rules(df, current_kdj):
    if len(df) < 3: return None, None
    w3 = df.iloc[-1]
    w2 = df.iloc[-2]
    w1 = df.iloc[-3]
    
    k = current_kdj['K']
    d = current_kdj['D']
    is_k_gt_d = k > d
    is_k_lt_d = k < d

    p1_status = None
    if (w2['high'] > w3['high']) and is_k_gt_d: p1_status = 'long'
    elif (w1['high'] > w2['high']) and (w2['high'] > w3['high']) and is_k_lt_d: p1_status = 'short'

    p2_status = None
    cond_pending_long = (w2['high'] > w1['high']) and (w3['close'] > w1['low']) and \
                        (w3['close'] <= w2['high']) and (w3['high'] < w2['high']) and is_k_gt_d
    
    cond_active_long = (w2['high'] > w1['high']) and (w3['close'] > w2['high']) and is_k_gt_d
    
    cond_pending_short = (w2['low'] < w1['low']) and (w3['close'] < w1['high']) and \
                         (w3['close'] >= w2['low']) and (w3['low'] > w2['low']) and is_k_lt_d
                         
    cond_active_short = (w2['low'] < w1['low']) and (w3['close'] < w2['low']) and is_k_lt_d
    
    if cond_active_long: p2_status = 'long'
    elif cond_pending_long: p2_status = 'pending_long'
    elif cond_active_short: p2_status = 'short'
    elif cond_pending_short: p2_status = 'pending_short'
        
    return p1_status, p2_status

def process_dataframe_to_weekly(df):
    """通用处理：标准化列名 -> 周线化 -> KDJ"""
    df.columns = [col.lower() for col in df.columns]
    
    # 确保有 datetime 列并设为索引
    if 'date' in df.columns:
        df['datetime'] = pd.to_datetime(df['date'])
    elif 'datetime' in df.columns:
        df['datetime'] = pd.to_datetime(df['datetime'])
    
    if 'datetime' in df.columns:
        df.set_index('datetime', inplace=True)
    
    # Resample to Weekly
    weekly = df.resample('W').agg({
        'open': 'first', 'high': 'max', 'low': 'min', 'close': 'last', 'volume': 'sum'
    }).dropna()
    
    weekly.reset_index(inplace=True)
    if 'datetime' in weekly.columns:
        weekly.rename(columns={'datetime': 'date'}, inplace=True)
        
    weekly['date'] = weekly['date'].dt.strftime('%Y-%m-%d')
    weekly = weekly.tail(13) # Last 3 months approx
    
    if len(weekly) < 5: return None
    
    return calculate_kdj(weekly)

def format_result(symbol, contract_type, weekly_df):
    last = weekly_df.iloc[-1]
    kdj = {
        'K': float(last['K']), 'D': float(last['D']), 'J': float(last['J']),
        'pattern': analyze_kdj_pattern(last['K'], last['D'], last['J'])
    }
    
    p1, p2 = check_rules(weekly_df, kdj)
    kdj['custom_rule_1'] = p1
    kdj['custom_rule_2'] = p2
    
    records = []
    for _, row in weekly_df.iterrows():
        records.append({
            "date": str(row["date"]),
            "open": float(row["open"]), "high": float(row["high"]),
            "low": float(row["low"]), "close": float(row["close"]),
            "volume": int(row["volume"]),
            "K": float(row["K"]), "D": float(row["D"]), "J": float(row["J"])
        })
        
    return {
        "symbol": symbol,
        "contractType": contract_type,
        "lastUpdate": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "latestKDJ": kdj,
        "data": records
    }

def fetch_contract_data(symbol, contract_type="主力"):
    # Method 1: Daily API
    try:
        df = ak.futures_zh_daily_sina(symbol=symbol)
        if df is not None and not df.empty:
            weekly_df = process_dataframe_to_weekly(df)
            if weekly_df is not None:
                return format_result(symbol, contract_type, weekly_df)
    except Exception as e:
        pass # Fallback

    # Method 2: Minute API (60min) -> Resample
    try:
        # print(f"  Fallback to Minute Data for {symbol}...")
        df = ak.futures_zh_minute_sina(symbol=symbol, period='60')
        if df is not None and not df.empty:
            weekly_df = process_dataframe_to_weekly(df)
            if weekly_df is not None:
                return format_result(symbol, contract_type, weekly_df)
    except Exception as e:
        print(f"  Minute fetch error for {symbol}: {e}")

    return None

def get_realtime_list_fix(name, code):
    search_names = [name]
    if code == 'EC': search_names = ['集运欧线', '欧线集运']
    if code == 'ZC': search_names = ['动力煤', '郑煤']
    if code == 'OI': search_names = ['菜籽油', '菜油']
    if code == 'CF': search_names = ['棉花一号', '棉花']
    
    for n in search_names:
        try:
            df = ak.futures_zh_realtime(symbol=n)
            if df is not None and not df.empty:
                return df
        except:
            continue
    return None

def main():
    if not os.path.exists('futures_data.js'):
        return

    with open('futures_data.js', 'r', encoding='utf-8') as f:
        content = f.read()
        start = content.find('{')
        end = content.rfind('};') + 1
        data = json.loads(content[start:end])

    missing_codes = []
    for code, info in data.items():
        if not info.get('main') or not info['main'].get('data'):
            missing_codes.append(code)

    print(f"Fixing data for {len(missing_codes)} contracts: {missing_codes}")

    for code in missing_codes:
        name = data[code].get('name', code)
        print(f"\nProcessing {name} ({code})...")
        
        df_real = get_realtime_list_fix(name, code)
        main_symbol, sub_symbol = None, None
        
        if df_real is not None and not df_real.empty:
            if 'hold' not in df_real.columns:
                 for c in ['position', 'open_interest', 'oi']: 
                     if c in df_real.columns: df_real['hold'] = df_real[c]
            if 'hold' in df_real.columns:
                 df_real = df_real.sort_values('hold', ascending=False)
                 symbols = [s for s in df_real['symbol'].tolist() if not s.endswith('0')]
                 if len(symbols) > 0: main_symbol = symbols[0]
                 if len(symbols) > 1: sub_symbol = symbols[1]

        if not main_symbol:
            # Smart Fallback
            if code == 'EC': main_symbol = f"{code}2604"
            else: main_symbol = f"{code}2605"
            print(f"  Fallback Main: {main_symbol}")

        if main_symbol:
            print(f"  Fetching Main: {main_symbol}")
            main_data = fetch_contract_data(main_symbol, "主力")
            if main_data:
                data[code]['main'] = main_data
                print(f"  Main Success: {main_symbol}")
            else:
                fallback_symbol = f"{code}2609"
                print(f"  Main Failed. Trying {fallback_symbol}...")
                main_data = fetch_contract_data(fallback_symbol, "主力")
                if main_data:
                    data[code]['main'] = main_data
                    print(f"  Main Success (Fallback): {fallback_symbol}")
                else:
                    print(f"  Main Failed Completely.")

        if sub_symbol:
            print(f"  Fetching Sub: {sub_symbol}")
            sub_data = fetch_contract_data(sub_symbol, "次主力")
            if sub_data:
                data[code]['sub'] = sub_data
                print(f"  Sub Success: {sub_symbol}")

    js_content = f"// 期货周线数据 + KDJ 指标（主力 + 次主力合约）\n// 更新时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n// 数据来源: 新浪财经 (via AKShare)\n// 周期: 周线 (最近3个月)\n\nconst FUTURES_DATA = {json.dumps(data, ensure_ascii=False, indent=2)};\n\nif (typeof module !== 'undefined' && module.exports) {{ module.exports = FUTURES_DATA; }}"
    
    with open('futures_data.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("\nFixed data saved to futures_data.js")

if __name__ == "__main__":
    main()
