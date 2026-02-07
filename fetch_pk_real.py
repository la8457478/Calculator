
import akshare as ak
import pandas as pd

def daily_to_weekly(df):
    df['date'] = pd.to_datetime(df['date'])
    df.set_index('date', inplace=True)
    weekly = df.resample('W').agg({
        'open': 'first', 'high': 'max', 'low': 'min', 'close': 'last', 'volume': 'sum'
    }).dropna()
    weekly.reset_index(inplace=True)
    weekly['date'] = weekly['date'].dt.strftime('%Y-%m-%d')
    return weekly

def fetch_pk():
    print("Fetching PK2605...")
    try:
        df = ak.futures_zh_daily_sina(symbol="PK2605")
        if df is not None and not df.empty:
            w = daily_to_weekly(df)
            print(w.tail(15)[['date', 'open', 'high', 'low', 'close']])
            
            # Check First Breakout Logic manually here or print last 15 to decide
            # Logic:
            # w4 (Current)
            # w3 (Last Week)
            # w2 (Prev Week)
            # Check if w2.low is lowest in last 10 weeks before it?
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    fetch_pk()
