import akshare as ak
import pandas as pd
from datetime import datetime

def test_alternatives():
    today = datetime.now().strftime("%Y%m%d")
    print(f"Testing alternatives for {today}...")

    # 1. Minute Data
    print("\n--- Testing futures_zh_minute_sina(OI2605, 60) ---")
    try:
        df = ak.futures_zh_minute_sina(symbol="OI2605", period="15") # 15min
        if df is not None:
            print(f"Success! Shape: {df.shape}")
            print(df.tail())
        else:
            print("Returned None")
    except Exception as e:
        print(f"Error: {e}")

    # 2. Daily Market Data (CZCE)
    print("\n--- Testing get_futures_daily(market='czce') ---")
    try:
        # Try fetching one day
        df = ak.get_futures_daily(start_date='20260210', end_date='20260210', market='czce')
        if df is not None:
             print(f"Success! Shape: {df.shape}")
             print(df.head())
        else:
             print("Returned None")
    except Exception as e:
         print(f"Error: {e}")

if __name__ == "__main__":
    test_alternatives()
