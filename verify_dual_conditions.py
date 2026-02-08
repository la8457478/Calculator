"""
验证筛选逻辑：蓄势K线形态 + KDJ金叉/死叉双重条件
"""
import json

with open('futures_data.js', 'r', encoding='utf-8') as f:
    content = f.read()
    data_start = content.find('{')
    data_end = content.rfind('};', 0, content.find('if (typeof')) + 1
    data = json.loads(content[data_start:data_end])

print("=" * 80)
print("双重条件验证")
print("=" * 80)

# 统计各种情况
has_pending_tag = []  # 有pending标签的
meets_kdj = []  # 满足KDJ条件的
meets_both = []  # 两个都满足的

for code, info in data.items():
    name = info.get('name', code)
    
    # 检查主力合约
    main = info.get('main')
    if main and main.get('latestKDJ'):
        kdj = main['latestKDJ']
        rule2 = kdj.get('custom_rule_2')
        k = kdj.get('K', 0)
        d = kdj.get('D', 0)
        
        if rule2 and 'pending' in rule2:
            has_pending_tag.append(f"{name}-主力({code})")
            
            # 检查KDJ
            if rule2 == 'pending_long' and k > d:
                meets_kdj.append(f"{name}-主力({code})")
                meets_both.append(f"{name}-主力({code}): pending_long + 金叉✓")
            elif rule2 == 'pending_short' and k < d:
                meets_kdj.append(f"{name}-主力({code})")
                meets_both.append(f"{name}-主力({code}): pending_short + 死叉✓")
            else:
                # 有pending标签但不满足KDJ
                kdj_status = "金叉" if k > d else "死叉"
                print(f"✗ 过滤: {name}-主力 ({rule2} 但是 {kdj_status}, K={k:.1f}, D={d:.1f})")
    
    # 检查次主力合约
    sub = info.get('sub')
    if sub and sub.get('latestKDJ'):
        kdj = sub['latestKDJ']
        rule2 = kdj.get('custom_rule_2')
        k = kdj.get('K', 0)
        d = kdj.get('D', 0)
        
        if rule2 and 'pending' in rule2:
            has_pending_tag.append(f"{name}-次主力({code})")
            
            if rule2 == 'pending_long' and k > d:
                meets_kdj.append(f"{name}-次主力({code})")
                meets_both.append(f"{name}-次主力({code}): pending_long + 金叉✓")
            elif rule2 == 'pending_short' and k < d:
                meets_kdj.append(f"{name}-次主力({code})")
                meets_both.append(f"{name}-次主力({code}): pending_short + 死叉✓")
            else:
                kdj_status = "金叉" if k > d else "死叉"
                print(f"✗ 过滤: {name}-次主力 ({rule2} 但是 {kdj_status}, K={k:.1f}, D={d:.1f})")

print("\n" + "=" * 80)
print("统计结果")
print("=" * 80)
print(f"有pending标签的合约: {len(has_pending_tag)} 个")
print(f"满足KDJ条件的: {len(meets_kdj)} 个")
print(f"双重条件都满足: {len(meets_both)} 个")
print()
print("双重条件满足的合约列表:")
for item in meets_both:
    print(f"  ✓ {item}")
