import akshare as ak
import json
import os
import pandas as pd
import time

def get_sector_map():
    cache_file = "sector_map.json"
    if os.path.exists(cache_file):
        print("Loading sector map from cache...")
        with open(cache_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    print("Fetching fresh sector data (This may take 1-2 mins)...")
    sector_map = {}
    
    # Try to load partial map if possible to resume
    if os.path.exists(cache_file):
        try:
            with open(cache_file, 'r', encoding='utf-8') as f:
                sector_map = json.load(f)
            print(f"Resuming with {len(sector_map)} entries...")
        except:
            pass

    try:
        boards = ak.stock_board_industry_name_em()
        total = len(boards)
        print(f"Found {total} industries.")
        
        processed_boards = set(sector_map.values()) # Inexact but close enough logic for resuming? No.
        # Sector map is by stock code. A stock can be in multiple boards? 
        # Actually this map only stores ONE board per stock (last write wins).
        
        # Better: store a list of processed board names?
        # But for now, let's just iterate and save often. If I restart, I might re-fetch.
        # But saving makes it robust against crash because data is saved.
        # To truly resume, I need to know which BOARD I finished.
        
        # Let's keep it simple: Save often.
        
        for i, row in boards.iterrows():
            board_name = row['板块名称']
            
            # Simple resume check: if many stocks from this board are in map, maybe skip?
            # No, safer to re-fetch unless I store processed_boards.
            
            try:
                cons = ak.stock_board_industry_cons_em(symbol=board_name)
                for _, stock in cons.iterrows():
                    code = str(stock['代码']).zfill(6)
                    sector_map[code] = board_name
            except:
                pass
            
            if i % 20 == 0: 
                print(f"Fetched {i}/{total} sectors...")
                # Save incrementally
                with open(cache_file, 'w', encoding='utf-8') as f:
                    json.dump(sector_map, f, ensure_ascii=False)
        
        with open(cache_file, 'w', encoding='utf-8') as f:
            json.dump(sector_map, f, ensure_ascii=False)
        return sector_map
    except Exception as e:
        print(f"Failed to fetch sectors: {e}")
        return {}
        
def main():
    print("Loading existing data...")
    try:
        with open("stock_quarterly_all.json", "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        print(f"Failed to load data: {e}")
        return

    print("Fetching Spot Data for PE/MarketCap...")
    try:
        spot_df = ak.stock_zh_a_spot_em()
        # Convert code to string and ensure format
        spot_df['代码'] = spot_df['代码'].astype(str).str.zfill(6)
        
        # Numeric conversion
        spot_df['市盈率-动态'] = pd.to_numeric(spot_df['市盈率-动态'], errors='coerce')
        spot_df['总市值'] = pd.to_numeric(spot_df['总市值'], errors='coerce')
        spot_df['成交额'] = pd.to_numeric(spot_df['成交额'], errors='coerce')
        
        stock_zh_a_spot_em_map = spot_df.set_index('代码')[['市盈率-动态', '总市值', '成交额']].to_dict(orient='index')
    except Exception as e:
        print(f"Spot fetch failed: {e}")
        stock_zh_a_spot_em_map = {}
        
    sector_map = get_sector_map()
    
    print("Enriching data...")
    for item in data:
        code = item['code']
        # Clean existing dirty data if any
        
        if code in stock_zh_a_spot_em_map:
            info = stock_zh_a_spot_em_map[code]
            
            pe = info['市盈率-动态']
            item['pe'] = None if pd.isna(pe) else pe
            
            mc = info['总市值']
            item['market_cap'] = None if pd.isna(mc) else mc
            
            to = info['成交额']
            item['turnover'] = None if pd.isna(to) else to
        
        if code in sector_map:
            item['sector'] = sector_map[code]
            
    print("Saving enriched data...")
    with open("stock_quarterly_all.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
    # Update pending file too
    pending = [d for d in data if d.get('status') == 'pending_long']
    with open("stock_quarterly_pending.json", "w", encoding="utf-8") as f:
        json.dump(pending, f, ensure_ascii=False, indent=2)
        
    print("Done!")
    
if __name__ == "__main__":
    main()
