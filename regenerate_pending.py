import json

def regenerate_pending():
    print("Loading enriched all data...")
    try:
        with open("stock_quarterly_all.json", "r", encoding="utf-8") as f:
            all_data = json.load(f)
    except FileNotFoundError:
        print("stock_quarterly_all.json not found.")
        return

    print(f"Total records: {len(all_data)}")
    
    # Filter pending
    pending_data = [item for item in all_data if item.get('status') and 'pending' in item['status']]
    
    print(f"Found {len(pending_data)} pending stocks.")
    
    # Save pending
    with open("stock_quarterly_pending.json", "w", encoding="utf-8") as f:
        json.dump(pending_data, f, ensure_ascii=False, indent=2)
        
    print("stock_quarterly_pending.json regenerated with enriched data.")

if __name__ == "__main__":
    regenerate_pending()
