import json

with open('futures_data.js', 'r', encoding='utf-8') as f:
    content = f.read()
    data_start = content.find('{')
    data_end = content.rfind('};', 0, content.find('if (typeof')) + 1
    data = json.loads(content[data_start:data_end])

sm = data.get('SM')
if sm and sm.get('main'):
    main = sm['main']
    kdj = main.get('latestKDJ', {})
    print(f"锰硅 (SM) 主力合约:")
    print(f"  合约: {main.get('symbol')}")
    print(f"  KDJ: K={kdj.get('K')}, D={kdj.get('D')}, J={kdj.get('J')}")
    print(f"  形态: {kdj.get('pattern')}")
    print(f"  规则2标签: {kdj.get('custom_rule_2')}")
    print(f"  K>D? {kdj.get('K') > kdj.get('D')}")
    print()
    print("分析:")
    if kdj.get('custom_rule_2') == 'pending_long':
        if kdj.get('K') > kdj.get('D'):
            print("  ✓ 符合新规则：蓄势做多 + 金叉")
        else:
            print("  ✗ 不符合新规则：虽然蓄势做多，但未金叉(K<D)")
    elif kdj.get('custom_rule_2') == 'pending_short':
        if kdj.get('K') < kdj.get('D'):
            print("  ✓ 符合新规则：蓄势做空 + 死叉")
        else:
            print("  ✗ 不符合新规则：虽然蓄势做空，但未死叉(K>D)")
