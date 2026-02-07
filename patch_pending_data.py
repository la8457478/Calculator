import json
import re

def patch_pending_futures():
    """
    Patch futures_data.js with complete Pending test data
    """
    file_path = "futures_data.js"
    
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file: {e}")
        return
    
    # Extract FUTURES_DATA object
    match = re.search(r'const FUTURES_DATA = ({.*?});', content, re.DOTALL)
    if not match:
        print("ERROR: Could not find FUTURES_DATA")
        return
    
    try:
        data = json.loads(match.group(1))
    except Exception as e:
        print(f"ERROR parsing JSON: {e}")
        return
    
    # 花生 PK2605 - Complete Data with pending_long
    pk_data = {
        "name": "花生",
        "code": "PK",
        "period": "weekly",
        "main": {
            "symbol": "PK2605",
            "contractType": "主力",
            "lastUpdate": "2026-02-07 (Patched for Pending Test)",
            "latestKDJ": {
                "K": 45.2,
                "D": 42.8,
                "J": 50.0,
                "pattern": "多头排列",
                "custom_rule_2": "pending_long"
            },
            "data": [
                {
                    "date": "2026-01-11",
                    "open": 7810,
                    "high": 7856,
                    "low": 7802,
                    "close": 7822,
                    "K": 20,
                    "D": 25,
                    "J": 10
                },
                {
                    "date": "2026-01-18",
                    "open": 7820,
                    "high": 7898,
                    "low": 7820,
                    "close": 7886,
                    "K": 35,
                    "D": 30,
                    "J": 45
                },
                {
                    "date": "2026-01-25",
                    "open": 7890,
                    "high": 7960,
                    "low": 7870,
                    "close": 7948,
                    "K": 55,
                    "D": 40,
                    "J": 85
                },
                {
                    "date": "2026-02-01",
                    "open": 7940,
                    "high": 7965,
                    "low": 7874,
                    "close": 7918,
                    "K": 45.2,
                    "D": 42.8,
                    "J": 50.0
                }
            ]
        }
    }
    
    # 玉米 C2605 - Pending data
    c_match = re.search(r'"C"\s*:\s*{[^}]*"main"\s*:\s*{[^}]*"latestKDJ"\s*:\s*({[^}]+})', content, re.DOTALL)
    if c_match:
        # Just add custom_rule_2 to existing C data
        try:
            c_kdj = json.loads(c_match.group(1))
            # Update C's latestKDJ with pending_long
            c_pattern = r'("C"\s*:\s*{[^}]*"main"\s*:\s*{[^}]*"latestKDJ"\s*:\s*{[^}]*)"pattern":\s*"[^"]*"'
            replacement = r'\1"pattern": "多头排列",\n        "custom_rule_2": "pending_long"'
            content = re.sub(c_pattern, replacement, content, flags=re.DOTALL)
            print("✓ Patched C (玉米) with pending_long")
        except:
            pass
    
    # 菜油 OI2605 - Add pending if needed (currently has normal data)
    # We'll leave OI as-is since it has valid data
    
    # Replace PK data completely
    data["PK"] = pk_data
    
    # Write back
    new_data_str = json.dumps(data, ensure_ascii=False, indent=2)
    new_content = content[:match.start(1)] + new_data_str + content[match.end(1):]
    
    try:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"✓ Successfully patched {file_path}")
        print("✓ PK (花生) now has complete Pending data")
        print("✓ PK should now appear at the top with RED BORDER")
        return True
    except Exception as e:
        print(f"ERROR writing file: {e}")
        return False

if __name__ == "__main__":
    patch_pending_futures()
