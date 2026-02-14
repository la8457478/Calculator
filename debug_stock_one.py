import akshare as ak
import pandas as pd
import numpy as np
import json
import ssl
from datetime import datetime

# Disable SSL verification globally
ssl._create_default_https_context = ssl._create_unverified_context

def daily_to_quarterly(df):
    print("Converting to quarterly...")
    df['date'] = pd.to_datetime(df['date'])
    df.set_index('date', inplace=True)
    
    try:
        quarterly = df.resample('QE').agg({
            'open': 'first', 'high': 'max', 'low': 'min', 'close': 'last', 'volume': 'sum'
        }).dropna()
        print("Used 'QE' frequency")
    except Exception as e:
        print(f"QE failed: {e}, trying Q")
        quarterly = df.resample('Q').agg({
            'open': 'first', 'high': 'max', 'low': 'min', 'close': 'last', 'volume': 'sum'
        }).dropna()
        
    quarterly.reset_index(inplace=True)
    quarterly['date'] = quarterly['date'].dt.strftime('%Y-%m-%d')
    return quarterly

def test_fetch(code):
    print(f"Testing fetch for {code}...")
    try:
        end_date = datetime.now().strftime('%Y%m%d')
        start_date = (datetime.now() - pd.DateOffset(years=5)).strftime('%Y%m%d')
        
        print(f"Fetching daily data from {start_date} to {end_date}...")
        df = ak.stock_zh_a_hist(symbol=code, period="daily", start_date=start_date, end_date=end_date, adjust="qfq")
        
        if df is None or df.empty:
            print("DF is empty or None")
            return
            
        print(f"Fetched {len(df)} rows.")
        print(f"Columns: {df.columns.tolist()}")
        print(df.head())
        
        # Renaissance columns
        df.rename(columns={
            '日期': 'date', '开盘': 'open', '收盘': 'close', 
            '最高': 'high', '最低': 'low', '成交量': 'volume'
        }, inplace=True)
        
        quarterly = daily_to_quarterly(df)
        print(f"Quarterly data: {len(quarterly)} rows.")
        print(quarterly.tail())
        
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    test_fetch("600519") # Maotai
