"""
重新筛选符合"蓄势"(Pending)条件的期货品种
使用新规则：做多必须KDJ金叉(K>D)，做空必须KDJ死叉(K<D)
"""
import json
import re

def check_pending_with_kdj(data_list, kdj):
    """
    检查是否符合蓄势条件（带KDJ金叉/死叉验证）
    
    Args:
        data_list: K线数据列表
        kdj: 最新KDJ数据 {K, D, J, pattern}
    
    Returns:
        None 或 ('pending_long'/'pending_short', breakout_price, stop_price)
    """
    if len(data_list) < 3:
        return None
    
    w1 = data_list[-3]
    w2 = data_list[-2]
    w3 = data_list[-1]
    
    k = kdj['K']
    d = kdj['D']
    is_k_gt_d = k > d  # 金叉
    is_k_lt_d = k < d  # 死叉
    
    # 做多蓄势条件
    cond_pending_long = (w2['high'] > w1['high']) and \
                        (w3['close'] > w1['low']) and \
                        (w3['close'] <= w2['high']) and \
                        (w3['high'] < w2['high']) and \
                        is_k_gt_d  # 必须金叉
    
    if cond_pending_long:
        return ('pending_long', w2['high'], w3['low'])
    
    # 做空蓄势条件
    cond_pending_short = (w2['low'] < w1['low']) and \
                         (w3['close'] < w1['high']) and \
                         (w3['close'] >= w2['low']) and \
                         (w3['low'] > w2['low']) and \
                         is_k_lt_d  # 必须死叉
    
    if cond_pending_short:
        return ('pending_short', w2['low'], w3['high'])
    
    return None

# 读取 futures_data.js
with open('futures_data.js', 'r', encoding='utf-8') as f:
    content = f.read()
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
        data_list = main.get('data', [])
        
        result = check_pending_with_kdj(data_list, kdj)
        if result:
            direction_code, breakout_price, stop_price = result
            direction = '做多' if 'long' in direction_code else '做空'
            current_price = data_list[-1]['close']
            
            pending_list.append({
                'code': code,
                'name': name,
                'contract': main['symbol'],
                'type': '主力',
                'direction': direction,
                'current_price': current_price,
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
        data_list = sub.get('data', [])
        
        result = check_pending_with_kdj(data_list, kdj)
        if result:
            direction_code, breakout_price, stop_price = result
            direction = '做多' if 'long' in direction_code else '做空'
            current_price = data_list[-1]['close']
            
            pending_list.append({
                'code': code,
                'name': name,
                'contract': sub['symbol'],
                'type': '次主力',
                'direction': direction,
                'current_price': current_price,
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
print(f"新规则：做多必须KDJ金叉(K>D)，做空必须KDJ死叉(K<D)")
print(f"筛选时间: 2026-02-08")
print(f"共找到 {len(pending_list)} 个合约")
print(f"{'='*80}\n")

if pending_list:
    for idx, item in enumerate(pending_list, 1):
        risk_per_point = abs(item['breakout_price'] - item['stop_price'])
        risk_percent = (risk_per_point / item['current_price']) * 100
        kdj_status = f"K={item['K']:.1f}, D={item['D']:.1f} ({'金叉✓' if item['K'] > item['D'] else '死叉✓'})"
        
        print(f"{idx}. {item['name']} ({item['code']}) - {item['contract']} [{item['type']}]")
        print(f"   方向: {item['direction']}")
        print(f"   当前价: {item['current_price']:.1f}")
        print(f"   突破价: {item['breakout_price']:.1f}")
        print(f"   止损价: {item['stop_price']:.1f}")
        print(f"   风险点数: {risk_per_point:.1f} ({risk_percent:.2f}%)")
        print(f"   KDJ: {kdj_status}, J={item['J']:.1f}")
        print(f"   形态: {item['pattern']}")
        print()
else:
    print("未找到符合'蓄势'条件的品种")

# 保存到文件
with open('pending_report_new.txt', 'w', encoding='utf-8') as f:
    f.write(f"{'='*80}\n")
    f.write(f"符合'蓄势'条件的期货品种 (S2: Pending)\n")
    f.write(f"新规则：做多必须KDJ金叉(K>D)，做空必须KDJ死叉(K<D)\n")
    f.write(f"筛选时间: 2026-02-08\n")
    f.write(f"共找到 {len(pending_list)} 个合约\n")
    f.write(f"{'='*80}\n\n")
    
    if pending_list:
        for idx, item in enumerate(pending_list, 1):
            risk_per_point = abs(item['breakout_price'] - item['stop_price'])
            risk_percent = (risk_per_point / item['current_price']) * 100
            kdj_status = f"K={item['K']:.1f}, D={item['D']:.1f} ({'金叉✓' if item['K'] > item['D'] else '死叉✓'})"
            
            f.write(f"{idx}. {item['name']} ({item['code']}) - {item['contract']} [{item['type']}]\n")
            f.write(f"   方向: {item['direction']}\n")
            f.write(f"   当前价: {item['current_price']:.1f}\n")
            f.write(f"   突破价: {item['breakout_price']:.1f}\n")
            f.write(f"   止损价: {item['stop_price']:.1f}\n")
            f.write(f"   风险点数: {risk_per_point:.1f} ({risk_percent:.2f}%)\n")
            f.write(f"   KDJ: {kdj_status}, J={item['J']:.1f}\n")
            f.write(f"   形态: {item['pattern']}\n")
            f.write('\n')
    else:
        f.write("未找到符合'蓄势'条件的品种\n")

print(f"结果已保存到 pending_report_new.txt")

# 统计分析
if pending_list:
    long_count = sum(1 for item in pending_list if item['direction'] == '做多')
    short_count = sum(1 for item in pending_list if item['direction'] == '做空')
    print(f"\n统计：")
    print(f"  做多蓄势: {long_count} 个")
    print(f"  做空蓄势: {short_count} 个")
