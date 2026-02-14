import akshare as ak
import pandas as pd

def test_fetch(symbol):
    print(f"\n--- Testing {symbol} ---")
    try:
        # Try Daily Specific
        print(f"1. futures_zh_daily_sina({symbol})")
        df = ak.futures_zh_daily_sina(symbol=symbol)
        if df is not None:
             print(f"   Success. Shape: {df.shape}")
        else:
             print("   Returned None")
    except Exception as e:
        print(f"   Error: {e}")

    try:
        # Try Main Continuous (only for 0 suffix)
        if symbol.endswith('0'):
            print(f"2. futures_main_sina({symbol})")
            df = ak.futures_main_sina(symbol=symbol)
            if df is not None:
                print(f"   Success. Shape: {df.shape}")
            else:
                print("   Returned None")
    except Exception as e:
        print(f"   Error: {e}")

if __name__ == "__main__":
    print(f"AKShare Version: {ak.__version__}")
    test_fetch("RB2605")
    test_fetch("RB0")
    test_fetch("OI2605")
    test_fetch("OI0")
