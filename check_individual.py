import akshare as ak
try:
    print("Fetching individual info for 600519...")
    df = ak.stock_individual_info_em(symbol="600519")
    print(df)
except Exception as e:
    print(f"Error: {e}")
