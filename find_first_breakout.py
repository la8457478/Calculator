
import json
import re

def check_first_breakout(data_list):
    if len(data_list) < 12: return None # Need history
    
    # w4: Current (Breakout Candle)
    # w3: Setup Candle (Higher Low)
    # w2: Pivot Low (The 'Bottom')
    w4 = data_list[-1]
    w3 = data_list[-2]
    w2 = data_list[-3]
    
    # History for lookback (e.g., 10 candles before w3)
    # Indices: -3 is w2. -13 to -3 is the window?
    history_window_long = [x['low'] for x in data_list[-13:-3]]
    history_window_short = [x['high'] for x in data_list[-13:-3]]
    
    # Pattern 2 Long (First Breakout):
    # 1. Structure: Higher Low (w3 > w2) + Breakout (w4 > w3)
    # 2. First Time: w2.low should be the Bottom (Lowest in history window)
    if (w3['low'] > w2['low']) and (w4['close'] > w3['high']):
        min_in_window = min(history_window_long)
        # Allow small tolerance? Or strict? Strict: w2.low <= min_in_window
        if w2['low'] <= min_in_window:
             return 'long'

    # Pattern 2 Short (First Breakdown):
    # 1. Structure: Lower High (w3 < w2) + Breakdown (w4 < w3)
    # 2. First Time: w2.high should be the Top (Highest in history window)
    elif (w3['high'] < w2['high']) and (w4['close'] < w3['low']):
        max_in_window = max(history_window_short)
        if w2['high'] >= max_in_window:
            return 'short'
            
    return None

def main():
    try:
        with open("futures_data.js", "r", encoding="utf-8") as f:
            content = f.read()
        
        match = re.search(r'const FUTURES_DATA = ({.*?});', content, re.DOTALL)
        if not match:
            print("Error parsing JSON")
            return
            
        data = json.loads(match.group(1))
        matches = []
        
        for code, info in data.items():
            name = info.get('name', code)
            if info.get('main'):
                status = check_first_breakout(info['main']['data'])
                if status: matches.append(f"{name} ({info['main']['symbol']}) [主力]: {status}")
            if info.get('sub'):
                status = check_first_breakout(info['sub']['data'])
                if status: matches.append(f"{name} ({info['sub']['symbol']}) [次主力]: {status}")

        print(f"Found {len(matches)} first-time breakout matches:\n")
        for m in matches:
            if "菜油" in m: continue
            print(m)
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
