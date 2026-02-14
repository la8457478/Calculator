import akshare as ak
import pandas as pd

try:
    print("Fetching stock spot data...")
    df = ak.stock_zh_a_spot_em()
    print(f"Columns found: {df.columns.tolist()}")
    
    # Print a sample row to see data examples
    if not df.empty:
        print("\nSample Data (First Row):")
        print(df.iloc[0])
        
except Exception as e:
    print(f"Error: {e}")
