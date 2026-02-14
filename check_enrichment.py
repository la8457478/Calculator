import json
import os

def check():
    if not os.path.exists('stock_quarterly_all.json'):
        print("File not found")
        return

    with open('stock_quarterly_all.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if not data:
        print("Data is empty")
        return

    print(f"Total items: {len(data)}")
    
    first_item = data[0]
    print(f"First item keys: {list(first_item.keys())}")
    
    sector_count = sum(1 for item in data if 'sector' in item)
    pe_count = sum(1 for item in data if 'pe' in item)
    
    print(f"Items with sector: {sector_count}")
    print(f"Items with pe: {pe_count}")

    if sector_count > 0:
        print(f"Sample sector: {data[0].get('sector', 'N/A')}")

if __name__ == "__main__":
    check()
