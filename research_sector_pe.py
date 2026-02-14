import akshare as ak
import pandas as pd
import time

def check_spot_columns():
    print("Checking Spot EM columns...")
    try:
        df = ak.stock_zh_a_spot_em()
        print(f"Spot Columns: {df.columns.tolist()}")
        # Check for PE fields
        pe_cols = [c for c in df.columns if '市盈率' in c]
        print(f"PE Columns found: {pe_cols}")
    except Exception as e:
        print(f"Spot EM failed: {e}")

def check_industry_boards():
    print("\nChecking Industry Boards...")
    try:
        df = ak.stock_board_industry_name_em()
        print(f"Found {len(df)} industries.")
        print(df.head())
        
        # Test fetching one industry
        first_board = df.iloc[0]['板块名称']
        print(f"Fetching stocks for board: {first_board}")
        board_stocks = ak.stock_board_industry_cons_em(symbol=first_board)
        print(f"Found {len(board_stocks)} stocks in {first_board}")
        print(board_stocks.head())
    except Exception as e:
        print(f"Industry check failed: {e}")

if __name__ == "__main__":
    check_spot_columns()
    check_industry_boards()
