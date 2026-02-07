import json
import re

def analyze_pending_patterns():
    """
    扫描所有期货商品,找出符合3根K线Pending规则的品种
    
    规则 (Pending Long):
    1. w2.high > w1.high  # 有明显上涨
    2. w3.close > w1.low  # 未跌破支撑
    3. w3.close <= w2.high  # 尚未突破
    """
    
    # 读取 futures_data.js
    with open("futures_data.js", "r", encoding="utf-8") as f:
        content = f.read()
    
    # 提取 FUTURES_DATA
    match = re.search(r'const FUTURES_DATA = ({.*?});', content, re.DOTALL)
    if not match:
        print("ERROR: 找不到 FUTURES_DATA")
        return
    
    try:
        data = json.loads(match.group(1))
    except Exception as e:
        print(f"ERROR: 解析JSON失败: {e}")
        return
    
    print("=" * 80)
    print("📊 扫描所有期货商品 - 3根K线 Pending 形态分析")
    print("=" * 80)
    print()
    
    pending_long_list = []
    pending_short_list = []
    active_long_list = []
    active_short_list = []
    
    for code, future in data.items():
        if not future.get('main'):
            continue
        
        main = future['main']
        if not main.get('data') or len(main['data']) < 3:
            continue
        
        # 获取最后3根K线
        bars = main['data']
        w1 = bars[-3]  # 起点
        w2 = bars[-2]  # Peak/Trough
        w3 = bars[-1]  # Current
        
        name = future.get('name', code)
        symbol = main.get('symbol', 'N/A')
        
        # 检查 Pending Long
        cond1_long = w2['high'] > w1['high']
        cond2_long = w3['close'] > w1['low']
        cond3_long = w3['close'] <= w2['high']
        
        is_pending_long = cond1_long and cond2_long and cond3_long
        
        # 检查 Active Long (已突破)
        is_active_long = (w2['high'] > w1['high']) and (w3['close'] > w2['high'])
        
        # 检查 Pending Short
        cond1_short = w2['low'] < w1['low']
        cond2_short = w3['close'] < w1['high']
        cond3_short = w3['close'] >= w2['low']
        
        is_pending_short = cond1_short and cond2_short and cond3_short
        
        # 检查 Active Short (已破位)
        is_active_short = (w2['low'] < w1['low']) and (w3['close'] < w2['low'])
        
        if is_pending_long:
            pending_long_list.append({
                'code': code,
                'name': name,
                'symbol': symbol,
                'w1': w1,
                'w2': w2,
                'w3': w3,
                'resistance': w2['high'],
                'support': w1['low']
            })
        
        if is_active_long:
            active_long_list.append({
                'code': code,
                'name': name,
                'symbol': symbol,
                'w3_close': w3['close'],
                'breakout_level': w2['high']
            })
        
        if is_pending_short:
            pending_short_list.append({
                'code': code,
                'name': name,
                'symbol': symbol,
                'w1': w1,
                'w2': w2,
                'w3': w3,
                'support': w2['low'],
                'resistance': w1['high']
            })
        
        if is_active_short:
            active_short_list.append({
                'code': code,
                'name': name,
                'symbol': symbol,
                'w3_close': w3['close'],
                'breakdown_level': w2['low']
            })
    
    # 输出结果
    print("🟡 Pending Long (蓄势做多) - 共 {} 个品种".format(len(pending_long_list)))
    print("-" * 80)
    for item in pending_long_list:
        print(f"✅ {item['name']} ({item['code']}) - {item['symbol']}")
        print(f"   w1: High {item['w1']['high']}, Low {item['w1']['low']}")
        print(f"   w2: High {item['w2']['high']} ← 阻力位")
        print(f"   w3: Close {item['w3']['close']} (蓄势中)")
        print(f"   突破位: {item['resistance']}, 支撑位: {item['support']}")
        print()
    
    print()
    print("🟢 Active Long (已突破) - 共 {} 个品种".format(len(active_long_list)))
    print("-" * 80)
    for item in active_long_list:
        print(f"🚀 {item['name']} ({item['code']}) - {item['symbol']}")
        print(f"   当前: {item['w3_close']}, 已突破: {item['breakout_level']}")
        print()
    
    print()
    print("🔴 Pending Short (蓄势做空) - 共 {} 个品种".format(len(pending_short_list)))
    print("-" * 80)
    for item in pending_short_list:
        print(f"⚠️ {item['name']} ({item['code']}) - {item['symbol']}")
        print(f"   w1: High {item['w1']['high']}, Low {item['w1']['low']}")
        print(f"   w2: Low {item['w2']['low']} ← 支撑位")
        print(f"   w3: Close {item['w3']['close']} (蓄势中)")
        print(f"   破位: {item['support']}, 阻力位: {item['resistance']}")
        print()
    
    print()
    print("🔻 Active Short (已破位) - 共 {} 个品种".format(len(active_short_list)))
    print("-" * 80)
    for item in active_short_list:
        print(f"📉 {item['name']} ({item['code']}) - {item['symbol']}")
        print(f"   当前: {item['w3_close']}, 已破位: {item['breakdown_level']}")
        print()
    
    print("=" * 80)
    print("总结:")
    print(f"  Pending Long: {len(pending_long_list)} 个")
    print(f"  Active Long: {len(active_long_list)} 个")
    print(f"  Pending Short: {len(pending_short_list)} 个")
    print(f"  Active Short: {len(active_short_list)} 个")
    print("=" * 80)
    
    # 返回需要添加标记的商品代码
    return [item['code'] for item in pending_long_list], \
           [item['code'] for item in pending_short_list]

if __name__ == "__main__":
    pending_long_codes, pending_short_codes = analyze_pending_patterns()
    
    print("\n需要添加 pending_long 标记的商品:")
    print(", ".join(pending_long_codes))
    
    print("\n需要添加 pending_short 标记的商品:")
    print(", ".join(pending_short_codes))
