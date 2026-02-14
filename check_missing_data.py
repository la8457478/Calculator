import json
import os

def check_missing():
    if not os.path.exists('futures_data.js'):
        print("futures_data.js not found")
        return

    with open('futures_data.js', 'r', encoding='utf-8') as f:
        content = f.read()
        # Extract JSON part
        start = content.find('{')
        end = content.rfind('};') + 1
        if start == -1 or end == 0:
            print("Could not parse futures_data.js")
            return
        
        try:
            data = json.loads(content[start:end])
        except json.JSONDecodeError as e:
            print(f"JSON Parse Error: {e}")
            return

    missing = []
    for code, info in data.items():
        name = info.get('name', code)
        main = info.get('main')
        sub = info.get('sub')
        
        is_missing = False
        reason = []
        
        if not main:
            is_missing = True
            reason.append("Main contract missing")
        elif not main.get('data') or len(main.get('data')) == 0:
            is_missing = True
            reason.append("Main data empty")
            
        if is_missing:
            missing.append({
                'code': code,
                'name': name,
                'reason': ", ".join(reason)
            })

    print(f"Found {len(missing)} items with missing data:")
    for item in missing:
        print(f"- {item['name']} ({item['code']}): {item['reason']}")

if __name__ == "__main__":
    check_missing()
