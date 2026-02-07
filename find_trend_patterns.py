
import json
import re

def check_rules(data_list):
    if len(data_list) < 4: return None
    
    # w4: Current
    # w3: Last Completed
    # w2: Previous
    w4 = data_list[-1]
    w3 = data_list[-2]
    w2 = data_list[-3]
    
    # Pattern 2 Long (Trend Continuation):
    # 1. Higher Lows: w3.low > w2.low
    # 2. Breakout: w4.close > w3.high
    if (w3['low'] > w2['low']) and (w4['close'] > w3['high']):
        return 'long'
        
    # Pattern 2 Short (Trend Continuation):
    # 1. Lower Highs: w3.high < w2.high
    # 2. Breakdown: w4.close < w3.low
    elif (w3['high'] < w2['high']) and (w4['close'] < w3['low']):
        return 'short'
        
    return None

def main():
    try:
        with open("futures_data.js", "r", encoding="utf-8") as f:
            content = f.read()
        
        # Extract JSON part
        match = re.search(r'const FUTURES_DATA = ({.*?});', content, re.DOTALL)
        if not match:
            print("Error parsing JSON")
            return
            
        data = json.loads(match.group(1))
        
        matches = []
        
        for code, info in data.items():
            name = info.get('name', code)
            
            # Check Main
            if info.get('main'):
                status = check_rules(info['main']['data'])
                if status:
                    matches.append(f"{name} ({info['main']['symbol']}) [主力]: {status}")

            # Check Sub
            if info.get('sub'):
                status = check_rules(info['sub']['data'])
                if status:
                    matches.append(f"{name} ({info['sub']['symbol']}) [次主力]: {status}")

        print(f"Found {len(matches)} trend continuation matches (excluding OI):\n")
        
        for m in matches:
            if "菜油" in m: continue # Exclude OI
            print(m)
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
