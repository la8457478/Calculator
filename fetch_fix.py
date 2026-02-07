
import akshare as ak
import json
import pandas as pd
from datetime import datetime
import time
import traceback

# 复用之前的辅助函数
def calculate_kdj(df, n=9, m1=3, m2=3):
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

def daily_to_weekly(df):
    df = df.copy()
    if 'date' in df.columns:
        df['date'] = pd.to_datetime(df['date'])
        df.set_index('date', inplace=True)
    weekly = df.resample('W').agg({
        'open': 'first', 'high': 'max', 'low': 'min', 'close': 'last', 'volume': 'sum'
    }).dropna()
    weekly.reset_index(inplace=True)
    weekly['date'] = weekly['date'].dt.strftime('%Y-%m-%d')
    return weekly

def check_rules(df, current_kdj):
    if len(df) < 3: return None, None
    w3 = df.iloc[-1]
    w2 = df.iloc[-2]
    w1 = df.iloc[-3]
    
    is_k_gt_d = w3['K'] > w3['D']
    is_k_lt_d = w3['K'] < w3['D']

    p1_status = None
    # Pattern 1 Long: Lower High + Gold Cross
    if (w1['high'] > w2['high']) and is_k_gt_d: # 修正后的逻辑：前高降低+金叉
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

def fetch_and_analyze():
    with open("futures_list.json", "r", encoding="utf-8") as f:
        futures_list = json.load(f)
    
    all_data = {}
    matches = []
    
    print(f"Starting fetch for {len(futures_list)} items using Main Continuous Contracts...")

    for i, fut in enumerate(futures_list):
        code = fut['code']
        name = fut['name']
        symbol = f"{code}0" # 连续合约
        
        try:
            # 尝试使用 ak.futures_main_sina 获取主力连续
            df = ak.futures_main_sina(symbol=symbol)
            if df is None or df.empty:
                print(f"Skipping {name}: No data")
                continue
                
            df.columns = [col.lower() for col in df.columns]
            df = df.tail(150) # Enough for weekly conversion
            
            weekly = daily_to_weekly(df)
            weekly = weekly.tail(20)
            
            if len(weekly) < 5: continue
            
            weekly = calculate_kdj(weekly)
            
            latest = weekly.iloc[-1]
            pattern_str = analyze_kdj_pattern(latest['K'], latest['D'], latest['J'])
            
            latest_kdj = {
                'K': float(latest['K']),
                'D': float(latest['D']),
                'J': float(latest['J']),
                'pattern': pattern_str
            }
            
            p1, p2 = check_rules(weekly, latest_kdj)
            latest_kdj['custom_rule_1'] = p1
            latest_kdj['custom_rule_2'] = p2
            
            if p1 or p2:
                matches.append(f"{name} ({code}): S1={p1}, S2={p2}")
            
            # Format Records
            records = []
            for _, row in weekly.tail(13).iterrows():
                records.append({
                    "date": str(row["date"]),
                    "open": float(row["open"]), "high": float(row["high"]),
                    "low": float(row["low"]), "close": float(row["close"]),
                    "K": float(row["K"]), "D": float(row["D"]), "J": float(row["J"])
                })
                
            all_data[code] = {
                "name": name,
                "code": code,
                "period": "weekly",
                "main": {
                    "symbol": symbol,
                    "contractType": "主力连续",
                    "lastUpdate": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                    "latestKDJ": latest_kdj,
                    "data": records
                },
                "sub": None
            }
            
            print(f"[{i+1}/{len(futures_list)}] {name}: OK ({p1}, {p2})")
            
        except Exception as e:
            print(f"[{i+1}] Error {name}: {e}")
            # traceback.print_exc()
        
        time.sleep(0.3)
        if i % 5 == 0:
             save_js(all_data)

    save_js(all_data)
    print("\nMatches Found:")
    for m in matches:
        print(m)

def save_js(data):
    content = f"const FUTURES_DATA = {json.dumps(data, ensure_ascii=False, indent=2)};\n"
    content += "if (typeof module !== 'undefined' && module.exports) { module.exports = FUTURES_DATA; }"
    with open("futures_data.js", "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    fetch_and_analyze()
