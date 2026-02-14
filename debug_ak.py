import akshare as ak
import pandas as pd

def test_fetch(symbol):
    print(f"Testing {symbol}...")
    try:
        df = ak.futures_zh_daily_sina(symbol=symbol)
        print("Result Type:", type(df))
        if df is not None:
            print("Columns:", df.columns)
            print("Head:", df.head())
            print("Tail:", df.tail())
        else:
            print("Result is None")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_fetch("OI2605")
    test_fetch("RB2605") # Control group
    test_fetch("OI0")    # Continuous?
