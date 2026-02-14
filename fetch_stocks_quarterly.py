import akshare as ak
import pandas as pd
import numpy as np
import json
import os
import time
import ssl
from datetime import datetime
from multiprocessing import Pool, cpu_count

# Disable SSL verification globally
ssl._create_default_https_context = ssl._create_unverified_context

def calculate_kdj(df, n=9, m1=3, m2=3):
    if len(df) < n: return df
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
    if k > d: patterns.append("多头排列")
    else: patterns.append("空头排列")
    return ", ".join(patterns)

def check_rules(df, current_kdj):
    if len(df) < 3: return None, None
    q3 = df.iloc[-1]
    q2 = df.iloc[-2]
    q1 = df.iloc[-3]
    
    k = current_kdj['K']
    d = current_kdj['D']
    is_k_gt_d = k > d
    is_k_lt_d = k < d

    p1_status = None # S1 logic omitted for brevity as we focus on S2 Pending

    p2_status = None
    # S2: Pending Logic (Quarterly)
    # Long: Q2 Up, Q3 Retrace but hold Q1 Low, Not break Q2 High, Q3 High < Q2 High, K > D
    cond_pending_long = (q2['high'] > q1['high']) and \
                        (q3['close'] > q1['low']) and \
                        (q3['close'] <= q2['high']) and \
                        (q3['high'] < q2['high']) and \
                        is_k_gt_d
    
    # Short: (Disabled for Stocks as per user request)
    cond_pending_short = False
    # cond_pending_short = (q2['low'] < q1['low']) and \
    #                      (q3['close'] < q1['high']) and \
    #                      (q3['close'] >= q2['low']) and \
    #                      (q3['low'] > q2['low']) and \
    #                      is_k_lt_d
                         
    if cond_pending_long: p2_status = 'pending_long'
    # elif cond_pending_short: p2_status = 'pending_short'
        
    return p1_status, p2_status

def daily_to_quarterly(df):
    df['date'] = pd.to_datetime(df['date'])
    df.set_index('date', inplace=True)

    # Use 'QE' for Quarter End in newer pandas
    try:
        quarterly = df.resample('QE').agg({
            'open': 'first', 'high': 'max', 'low': 'min', 'close': 'last', 'volume': 'sum'
        }).dropna()
    except Exception:
        # Fallback for older pandas
        quarterly = df.resample('Q').agg({
            'open': 'first', 'high': 'max', 'low': 'min', 'close': 'last', 'volume': 'sum'
        }).dropna()
    quarterly.reset_index(inplace=True)
    quarterly['date'] = quarterly['date'].dt.strftime('%Y-%m-%d')
    return quarterly

def get_latest_report_date():
    now = datetime.now()
    # Logic to find the likely latest report date
    # Q3 reports (Sep 30) usually out by Oct 31.
    # Annual reports (Dec 31) by Apr 30.
    # Q1 reports (Mar 31) by Apr 30.
    year = now.year
    month = now.month
    
    # Simple fallback sequence
    dates = []
    if month < 4:
        dates = [f"{year-1}0930", f"{year-1}0630"]
    elif month < 8:
        dates = [f"{year}0331", f"{year-1}1231"]
    elif month < 10:
        dates = [f"{year}0630", f"{year}0331"]
    else:
        dates = [f"{year}0930", f"{year}0630"]
        
    return dates

def fetch_loss_making_stocks():
    """Return a set of codes that are loss-making in latest report"""
    loss_codes = set()
    dates = get_latest_report_date()
    
    for date_str in dates:
        print(f"Fetching financial report for {date_str}...")
        try:
            df = ak.stock_yjbb_em(date=date_str)
            if df is not None and not df.empty:
                # Find profit column
                profit_col = None
                for c in df.columns:
                    if '净利润' in c and '同比增长' not in c and '环比' not in c:
                        profit_col = c
                        break
                
                if profit_col:
                    # Filter loss < 0
                    # Some might be strings or have units, need to clean? 
                    # akshare usually returns floats for these now, but let's be safe
                    # But usually it returns numeric.
                    loss_df = df[df[profit_col] < 0]
                    codes = loss_df['股票代码'].tolist()
                    loss_codes.update(codes)
                    print(f"Found {len(codes)} loss-making stocks in {date_str}")
                    break # Found latest, stop
        except Exception as e:
            print(f"Error fetching report {date_str}: {e}")
            continue
            
    return loss_codes

def get_sector_map():
    sector_map = {}
    cache_file = "sector_map.json"
    
    if os.path.exists(cache_file):
        try:
            with open(cache_file, 'r', encoding='utf-8') as f:
                sector_map = json.load(f)
            # If cache seems populated (e.g. > 1000 items), use it. 
            # Otherwise we might want to update it, but for now let's trust the cache if it exists.
            if len(sector_map) > 1000:
                print(f"Loaded {len(sector_map)} sectors from cache.")
                return sector_map
        except Exception as e:
            print(f"Error loading sector cache: {e}")
    
    print("Fetching fresh sector data (This may take 1-2 mins)...")
    try:
        boards = ak.stock_board_industry_name_em()
        total = len(boards)
        for i, row in boards.iterrows():
            board_name = row['板块名称']
            try:
                cons = ak.stock_board_industry_cons_em(symbol=board_name)
                for _, stock in cons.iterrows():
                    code = str(stock['代码']).zfill(6)
                    sector_map[code] = board_name
            except:
                pass
            if i % 10 == 0: 
                print(f"Fetched {i}/{total} sectors...")
                
        with open(cache_file, 'w', encoding='utf-8') as f:
            json.dump(sector_map, f, ensure_ascii=False)
            
    except Exception as e:
        print(f"Error fetching sectors: {e}")
        
    return sector_map

def fetch_stock_task(args):
    code, name = args
    try:
        # Fetch Daily (5 years)
        end_date = datetime.now().strftime('%Y%m%d')
        start_date = (datetime.now() - pd.DateOffset(years=5)).strftime('%Y%m%d')
        
        df = ak.stock_zh_a_hist(symbol=code, period="daily", start_date=start_date, end_date=end_date, adjust="qfq")
        if df is None or df.empty: return None
        
        # Renaissance columns (Chinese to English)
        df.rename(columns={
            '日期': 'date', '开盘': 'open', '收盘': 'close', 
            '最高': 'high', '最低': 'low', '成交量': 'volume'
        }, inplace=True)
        
        # To Quarterly
        quarterly = daily_to_quarterly(df)
        if len(quarterly) < 5: return None
        
        # Verify Pending Rule
        # User Requirement: Exclude the last (current) K-line for pending calculation
        quarterly_for_check = quarterly.iloc[:-1].copy()
        
        # Recalculate KDJ for the check dataset (since KDJ depends on history, just slicing might be slightly off if we want 'completed' status, but strictly speaking KDJ of previous quarters shouldn't change much unless we re-calculate on the sliced df.
        # Better: Calculate on FULL df, then slice KDJ values? No, KDJ of Q3 is Q3.
        # But wait, if we calculate KDJ on full, Q3's KDJ is slightly influenced by Q4? No, KDJ is lagging. K(t) depends on Close(t) and MinMax(t-9).
        # So KDJ values for previous quarters are fixed once the quarter closes.
        # So we can just take the KDJ values from the full calculation?
        # Actually, let's keep it simple: Use the full dataframe's KDJ, but look at iloc[-2] (the previous quarter) as the "Signal Bar".
        
        quarterly = calculate_kdj(quarterly)
        
        # Define the dataset for checking rules (The completed quarters)
        check_df = quarterly.iloc[:-1]
        
        last_completed = check_df.iloc[-1]
        kdj_completed = {
            'K': float(last_completed['K']), 'D': float(last_completed['D']), 'J': float(last_completed['J']),
            'pattern': analyze_kdj_pattern(last_completed['K'], last_completed['D'], last_completed['J'])
        }
        
        # Perform check on the sliced dataframe (excluding current)
        p1, p2 = check_rules(check_df, kdj_completed)
        

        
        return {
            'code': code,
            'name': name,
            'status': p2 if p2 else 'normal',
            'kdj': kdj_completed, # Show the KDJ of the PATTERN end, or current? User probably wants to see the pattern status. Let's show completed KDJ for consistency with the rule.
            'last_date': str(quarterly.iloc[-1]['date']), # Current date
            'price': float(quarterly.iloc[-1]['close']), # Current price
            
            # These Q1/Q2/Q3 should correspond to the PATTERN (i.e., previous quarters)
            'q1_low': float(check_df.iloc[-3]['low']),
            'q1_high': float(check_df.iloc[-3]['high']),
            'q2_low': float(check_df.iloc[-2]['low']),
            'q2_high': float(check_df.iloc[-2]['high']),
            'q3_low': float(check_df.iloc[-1]['low']),
            'q3_high': float(check_df.iloc[-1]['high']),
            
            'data': json.loads(quarterly.tail(12).to_json(orient='records')) # Full data for chart
        }
    except Exception:
        pass
    return None

def main():
    print("Step 1: Fetching Stock List...")
    try:
        spot_df = ak.stock_zh_a_spot_em()
    except Exception as e:
        print(f"Failed to fetch stock list: {e}")
        return

    # Filter 1: Market Board (BJ, STAR)
    # BJ: Starts with 8, 4, 9_
    # STAR: Starts with 688
    def is_valid_market(code):
        if code.startswith(('8', '4', '9', '688')): return False
        return True

    valid_stocks = []
    for _, row in spot_df.iterrows():
        code = str(row['代码'])
        name = str(row['名称'])
        if is_valid_market(code) and 'ST' not in name:
            valid_stocks.append((code, name))
            
    print(f"Total valid stocks (No BJ/STAR/ST): {len(valid_stocks)}")
    
    print("Step 2: Fetching Financial Loss List...")
    loss_codes = fetch_loss_making_stocks()
    print(f"Total loss-making stocks to exclude: {len(loss_codes)}")
    
    # Filter 2: Loss making
    final_stocks = [s for s in valid_stocks if s[0] not in loss_codes]
    print(f"Final stocks to scan: {len(final_stocks)}")
    
    # For testing, limiter
    # final_stocks = final_stocks[:50] # Debug
    
    print("Step 3: Scanning for Pending Patterns (Multiprocessing)...")
    start_time = time.time()
    
    results = []
    # Use 8 processes or CPU count
    pool_size = min(8, cpu_count())
    with Pool(pool_size) as pool:
        # Use imap_unordered for progress
        total = len(final_stocks)
        for i, res in enumerate(pool.imap_unordered(fetch_stock_task, final_stocks), 1):
            if res:
                results.append(res)
            if i % 100 == 0:
                print(f"Progress: {i}/{total} - Captured {len(results)} stocks")
                
    end_time = time.time()
    print(f"Scan complete in {end_time - start_time:.1f}s. Found {len(results)} stocks.")
    
    # Enrichment: Add Sector, PE, Market Cap, Turnover
    print("Enriching data with Sector, PE, Market Cap, Turnover...")
    
    # 1. Prepare Spot Data Map
    spot_data_map = {}
    try:
        # We already have spot_df from Step 1, but we need to ensure columns match
        # Clean data
        spot_df['代码'] = spot_df['代码'].astype(str).str.zfill(6)
        spot_df['市盈率-动态'] = pd.to_numeric(spot_df['市盈率-动态'], errors='coerce')
        spot_df['总市值'] = pd.to_numeric(spot_df['总市值'], errors='coerce')
        spot_df['成交额'] = pd.to_numeric(spot_df['成交额'], errors='coerce')
        
        for _, row in spot_df.iterrows():
            code = row['代码']
            spot_data_map[code] = {
                'pe': None if pd.isna(row['市盈率-动态']) else row['市盈率-动态'],
                'market_cap': None if pd.isna(row['总市值']) else row['总市值'],
                'turnover': None if pd.isna(row['成交额']) else row['成交额']
            }
    except Exception as e:
        print(f"Error processing spot data for enrichment: {e}")

    # 2. Get Sector Map
    sector_map = get_sector_map()
    
    # 3. Enrich Results
    for item in results:
        code = item['code']
        
        # Add Spot Data
        if code in spot_data_map:
            item.update(spot_data_map[code])
        else:
            item['pe'] = None
            item['market_cap'] = None
            item['turnover'] = None
            
        # Add Sector
        item['sector'] = sector_map.get(code, None)

    # Save all results
    with open("stock_quarterly_all.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
        
    # Save pending only (enriched)
    pending_only = [r for r in results if r['status'] and 'pending' in r['status']]
    with open("stock_quarterly_pending.json", "w", encoding="utf-8") as f:
        json.dump(pending_only, f, ensure_ascii=False, indent=2)
        
    # Generate Report
    with open("stock_pending_report.txt", "w", encoding="utf-8") as f:
        f.write(f"Stock Quarterly Pending Report\nTime: {datetime.now()}\n\n")
        f.write(f"Total scanned: {len(final_stocks)}\n")
        f.write(f"Found: {len(results)}\n\n")
        
        for item in results:
            direction = "做多" if "long" in item['status'] else "做空"
            f.write(f"{item['name']} ({item['code']}) - {direction}\n")
            f.write(f"  Price: {item['price']}, Date: {item['last_date']}\n")
            f.write(f"  KDJ: K={item['kdj']['K']}, D={item['kdj']['D']}\n")
            if direction == "做多":
                f.write(f"  Setup: Q2 High {item['q2_high']}, Breakout > {item['q2_high']}\n")
            else:
                f.write(f"  Setup: Q2 Low {item['q2_low']}, Breakdown < {item['q2_low']}\n")
            f.write("\n")

if __name__ == "__main__":
    main()
