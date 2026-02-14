import akshare as ak
import pandas as pd
from datetime import datetime
import ssl

# Disable SSL verification
ssl._create_default_https_context = ssl._create_unverified_context

def check_stock_data():
    print("1. Checking Stock List (Spot Data)...")
    try:
        df = ak.stock_zh_a_spot_em()
        print("Columns:", df.columns)
        print(df.head())
        # Check code patterns
        print("Sample Codes:", df['代码'].head(10).tolist())
    except Exception as e:
        print(f"Error spot: {e}")

    print("\n2. Checking Financial Data (YJBB)...")
    try:
        # Get latest report date (approx)
        now = datetime.now()
        # Ensure we get a date that definitely has reports. 
        # For Feb 2026, Q3 2025 (20250930) should be fully out. Q4 2025 might be partial.
        # Let's try 20250930 to be safe and check columns.
        date_str = "20250930"
            
        print(f"Fetching report for {date_str}...")
        df_fin = ak.stock_yjbb_em(date=date_str)
        print("Columns:", df_fin.columns)
        print(df_fin.head())
        
        # Check if '净利润' or similar exists
        for col in df_fin.columns:
            if '净利润' in col:
                print(f"Found Profit Column: {col}")
    except Exception as e:
        print(f"Error financial: {e}")

if __name__ == "__main__":
    check_stock_data()
