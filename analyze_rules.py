
import json
import pandas as pd
import re

def analyze_kdj_pattern(k, d, j):
    patterns = []
    if j > 100: patterns.append("超买区间")
    elif j < 0: patterns.append("超卖区间")
    if k > 80 and d > 80: patterns.append("高位钝化")
    elif k < 20 and d < 20: patterns.append("低位钝化")
    if k > d and j > k: patterns.append("多头排列")
    elif k < d and j < k: patterns.append("空头排列")
    return ", ".join(patterns) if patterns else "中性区间"

def check_rules(data_list, current_kdj):
    if len(data_list) < 3: return None, None
    
    # data_list entries are dicts with 'high', 'low', 'close', 'K', 'D', 'J'
    w3 = data_list[-1]
    w2 = data_list[-2]
    w1 = data_list[-3]
    
    is_k_gt_d = w3['K'] > w3['D']
    is_k_lt_d = w3['K'] < w3['D']

    p1_status = None
    # Pattern 1 Long: Lower High + Gold Cross
    if (w1['high'] > w2['high']) and is_k_gt_d:
        p1_status = 'long'
    # Pattern 1 Short: Lower Highs + Death Cross
    elif (w1['high'] > w2['high']) and (w2['high'] > w3['high']) and is_k_lt_d:
        p1_status = 'short'

    p2_status = None
    # Pattern 2 Long (Breakout): Descending Highs + Break w2 High
    if (w1['high'] > w2['high']) and (w3['close'] > w2['high']):
        p2_status = 'long'
    # Pattern 2 Short (Breakdown): Ascending Lows + Break w2 Low
    elif (w1['low'] < w2['low']) and (w3['close'] < w2['low']):
        p2_status = 'short'
        
    return p1_status, p2_status

def main():
    try:
        with open("futures_data.js", "r", encoding="utf-8") as f:
            content = f.read()
        
        # Extract JSON part
        json_str = re.search(r'const FUTURES_DATA = ({.*?});', content, re.DOTALL).group(1)
        data = json.loads(json_str)
        
        matches = []
        
        print(f"Loaded data for {len(data)} commodities.")
        print("-" * 60)
        
        for code, info in data.items():
            name = info.get('name', code)
            
            # Check Main Contract
            if info.get('main'):
                main_data = info['main'].get('data', [])
                main_kdj = info['main'].get('latestKDJ', {})
                p1, p2 = check_rules(main_data, main_kdj)
                
                if p1 or p2:
                    matches.append({
                        "name": name,
                        "type": "主力",
                        "symbol": info['main']['symbol'],
                        "s1": p1,
                        "s2": p2,
                        "kdj": f"K={main_kdj.get('K')}, D={main_kdj.get('D')}"
                    })

            # Check Sub Contract
            if info.get('sub'):
                sub_data = info['sub'].get('data', [])
                sub_kdj = info['sub'].get('latestKDJ', {})
                p1, p2 = check_rules(sub_data, sub_kdj)

                if p1 or p2:
                    matches.append({
                        "name": name,
                        "type": "次主力",
                        "symbol": info['sub']['symbol'],
                        "s1": p1,
                        "s2": p2,
                        "kdj": f"K={sub_kdj.get('K')}, D={sub_kdj.get('D')}"
                    })

        print(f"Found {len(matches)} opportunities:\n")
        
        # Group by S1 and S2
        s1_long = [m for m in matches if m['s1'] == 'long']
        s1_short = [m for m in matches if m['s1'] == 'short']
        s2_long = [m for m in matches if m['s2'] == 'long']
        s2_short = [m for m in matches if m['s2'] == 'short']
        
        print(f"【S1: 周五收盘确认 - 复苏 (做多)】 ({len(s1_long)})")
        for m in s1_long: print(f"  - {m['name']} ({m['symbol']}) {m['type']} | {m['kdj']}")
        print("")

        print(f"【S1: 周五收盘确认 - 转弱 (做空)】 ({len(s1_short)})")
        for m in s1_short: print(f"  - {m['name']} ({m['symbol']}) {m['type']} | {m['kdj']}")
        print("")
        
        print(f"【S2: 下周突破跟进 - 突破 (做多)】 ({len(s2_long)})")
        for m in s2_long: print(f"  - {m['name']} ({m['symbol']}) {m['type']} | {m['kdj']}")
        print("")
        
        print(f"【S2: 下周突破跟进 - 破位 (做空)】 ({len(s2_short)})")
        for m in s2_short: print(f"  - {m['name']} ({m['symbol']}) {m['type']} | {m['kdj']}")
        
    except Exception as e:
        print(f"Error: {e}")
        # import traceback
        # traceback.print_exc()

if __name__ == "__main__":
    main()
