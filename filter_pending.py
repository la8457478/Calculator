"""
筛选出符合"蓄势"(Pending)条件的期货品种
"""
import json
import re

# 读取 futures_data.js
with open('futures_data.js', 'r', encoding='utf-8') as f:
    content = f.read()
    # 找到 JSON 数据部分
    data_start = content.find('{')
    data_end = content.rfind('};', 0, content.find('if (typeof')) + 1
    data = json.loads(content[data_start:data_end])

# 筛选 Pending 品种
pending_list = []

for code, info in data.items():
    name = info.get('name', code)
    
    # 检查主力合约
    main = info.get('main')
    if main and main.get('latestKDJ'):
        kdj = main['latestKDJ']
        rule2 = kdj.get('custom_rule_2')
        
        if rule2 and 'pending' in rule2:
            # 计算突破价和止损价
            data_list = main.get('data', [])
            if len(data_list) >= 2:
                w2 = data_list[-2]  # 前一周
                w3 = data_list[-1]  # 本周
                
                if rule2 == 'pending_long':
                    breakout_price = w2['high']
                    stop_price = w3['low']
                    direction = '做多'
                elif rule2 == 'pending_short':
                    breakout_price = w2['low']
                    stop_price = w3['high']
                    direction = '做空'
                else:
                    continue
                
                pending_list.append({
                    'code': code,
                    'name': name,
                    'contract': main['symbol'],
                    'type': '主力',
                    'direction': direction,
                    'current_price': w3['close'],
                    'breakout_price': breakout_price,
                    'stop_price': stop_price,
                    'K': kdj['K'],
                    'D': kdj['D'],
                    'J': kdj['J'],
                    'pattern': kdj['pattern']
                })
    
    # 检查次主力合约
    sub = info.get('sub')
    if sub and sub.get('latestKDJ'):
        kdj = sub['latestKDJ']
        rule2 = kdj.get('custom_rule_2')
        
        if rule2 and 'pending' in rule2:
            data_list = sub.get('data', [])
            if len(data_list) >= 2:
                w2 = data_list[-2]
                w3 = data_list[-1]
                
                if rule2 == 'pending_long':
                    breakout_price = w2['high']
                    stop_price = w3['low']
                    direction = '做多'
                elif rule2 == 'pending_short':
                    breakout_price = w2['low']
                    stop_price = w3['high']
                    direction = '做空'
                else:
                    continue
                
                pending_list.append({
                    'code': code,
                    'name': name,
                    'contract': sub['symbol'],
                    'type': '次主力',
                    'direction': direction,
                    'current_price': w3['close'],
                    'breakout_price': breakout_price,
                    'stop_price': stop_price,
                    'K': kdj['K'],
                    'D': kdj['D'],
                    'J': kdj['J'],
                    'pattern': kdj['pattern']
                })

# 输出结果
print(f"\n{'='*80}")
print(f"符合'蓄势'条件的期货品种 (S2: Pending)")
print(f"筛选时间: 2026-02-08")
print(f"共找到 {len(pending_list)} 个合约")
print(f"{'='*80}\n")

if pending_list:
    for idx, item in enumerate(pending_list, 1):
        risk_per_point = abs(item['breakout_price'] - item['stop_price'])
        risk_percent = (risk_per_point / item['current_price']) * 100
        
        print(f"{idx}. {item['name']} ({item['code']}) - {item['contract']} [{item['type']}]")
        print(f"   方向: {item['direction']}")
        print(f"   当前价: {item['current_price']:.1f}")
        print(f"   突破价: {item['breakout_price']:.1f}")
        print(f"   止损价: {item['stop_price']:.1f}")
        print(f"   风险点数: {risk_per_point:.1f} ({risk_percent:.2f}%)")
        print(f"   KDJ: K={item['K']:.1f}, D={item['D']:.1f}, J={item['J']:.1f}")
        print(f"   形态: {item['pattern']}")
        print()
else:
    print("未找到符合'蓄势'条件的品种")

# 保存到文件
with open('pending_report.txt', 'w', encoding='utf-8') as f:
    f.write(f"{'='*80}\n")
    f.write(f"符合'蓄势'条件的期货品种 (S2: Pending)\n")
    f.write(f"筛选时间: 2026-02-08\n")
    f.write(f"共找到 {len(pending_list)} 个合约\n")
    f.write(f"{'='*80}\n\n")
    
    if pending_list:
        for idx, item in enumerate(pending_list, 1):
            risk_per_point = abs(item['breakout_price'] - item['stop_price'])
            risk_percent = (risk_per_point / item['current_price']) * 100
            
            f.write(f"{idx}. {item['name']} ({item['code']}) - {item['contract']} [{item['type']}]\n")
            f.write(f"   方向: {item['direction']}\n")
            f.write(f"   当前价: {item['current_price']:.1f}\n")
            f.write(f"   突破价: {item['breakout_price']:.1f}\n")
            f.write(f"   止损价: {item['stop_price']:.1f}\n")
            f.write(f"   风险点数: {risk_per_point:.1f} ({risk_percent:.2f}%)\n")
            f.write(f"   KDJ: K={item['K']:.1f}, D={item['D']:.1f}, J={item['J']:.1f}\n")
            f.write(f"   形态: {item['pattern']}\n")
            f.write('\n')
    else:
        f.write("未找到符合'蓄势'条件的品种\n")

print(f"结果已保存到 pending_report.txt")
