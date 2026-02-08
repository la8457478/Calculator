# 股票季线筛选技术方案

## 一、方案概述

基于期货周线筛选的成功经验，完全可以将相同的逻辑应用到股票季线数据分析上。

### 核心流程
```
数据获取 → KDJ计算 → 规则筛选 → 报告生成
```

## 二、技术实现方案

### 2.1 数据源选择

#### 推荐方案：AKShare
```python
import akshare as ak

# 获取A股列表
stock_list = ak.stock_zh_a_spot_em()

# 获取个股日线数据（然后转季线）
df = ak.stock_zh_a_hist(symbol="000001", period="daily", start_date="20200101", adjust="qfq")

# 或直接获取季线数据（如果支持）
df_quarter = ak.stock_zh_a_hist(symbol="000001", period="quarter", adjust="qfq")
```

**优点：**
- 免费开源
- 数据实时性好
- 支持前复权/后复权
- 已在期货项目中验证

**缺点：**
- API可能变动
- 请求频率限制
- 需要处理异常

### 2.2 数据转换逻辑

#### 日线转季线
```python
def daily_to_quarterly(df):
    """将日线数据转换为季线数据"""
    df['date'] = pd.to_datetime(df['date'])
    df.set_index('date', inplace=True)
    
    # 按季度重采样
    quarterly = df.resample('Q').agg({
        'open': 'first',
        'high': 'max',
        'low': 'min',
        'close': 'last',
        'volume': 'sum'
    }).dropna()
    
    return quarterly
```

#### 季度末时间点
- Q1: 3月31日
- Q2: 6月30日
- Q3: 9月30日
- Q4: 12月31日

### 2.3 筛选规则（复用期货逻辑）

#### 规则1：S1 反转/转弱
```python
# 做多（复苏）：前高逐步降低 + KDJ金叉
if (w2['high'] > w3['high']) and (K > D):
    status = 'long'

# 做空（转弱）：前高逐步降低 + KDJ死叉
elif (w1['high'] > w2['high'] > w3['high']) and (K < D):
    status = 'short'
```

#### 规则2：S2 蓄势/突破（3根K线）
```python
# 做多蓄势：
# 1. w2是上涨K线 (w2.high > w1.high)
# 2. w3回调但不破w1低点 (w3.close > w1.low)
# 3. w3未突破w2高点 (w3.close <= w2.high)
# 4. w3高点低于w2 (w3.high < w2.high)

pending_long = (w2['high'] > w1['high']) and \
               (w3['close'] > w1['low']) and \
               (w3['close'] <= w2['high']) and \
               (w3['high'] < w2['high'])
```

### 2.4 完整代码结构

```python
# fetch_stocks_quarterly.py

import akshare as ak
import pandas as pd
import json
from datetime import datetime

def get_all_stocks():
    """获取A股列表"""
    df = ak.stock_zh_a_spot_em()
    return df[['代码', '名称']].values.tolist()

def fetch_stock_quarterly_data(stock_code, periods=20):
    """获取单只股票的季线数据"""
    try:
        # 获取足够长的日线数据
        end_date = datetime.now().strftime('%Y%m%d')
        start_date = (datetime.now() - pd.DateOffset(years=5)).strftime('%Y%m%d')
        
        df = ak.stock_zh_a_hist(
            symbol=stock_code,
            period="daily",
            start_date=start_date,
            end_date=end_date,
            adjust="qfq"  # 前复权
        )
        
        # 转季线
        quarterly = daily_to_quarterly(df)
        quarterly = quarterly.tail(periods)
        
        # 计算KDJ
        quarterly = calculate_kdj(quarterly)
        
        return quarterly
        
    except Exception as e:
        print(f"获取 {stock_code} 失败: {e}")
        return None

def scan_all_stocks():
    """扫描所有股票"""
    stocks = get_all_stocks()
    results = []
    
    for i, (code, name) in enumerate(stocks):
        print(f"[{i+1}/{len(stocks)}] {name} ({code})")
        
        df = fetch_stock_quarterly_data(code)
        if df is None or len(df) < 3:
            continue
        
        # 检查规则
        kdj = get_latest_kdj(df)
        p1, p2 = check_rules(df, kdj)
        
        if p2 and 'pending' in p2:
            results.append({
                'code': code,
                'name': name,
                'rule': p2,
                'kdj': kdj
            })
        
        # 避免请求过快
        time.sleep(0.1)
    
    return results
```

## 三、关键难点分析

### 3.1 数据获取难点

#### ❌ 难点1：请求频率限制
- **问题**：A股有5000+只股票，全量扫描耗时长
- **解决方案**：
  ```python
  # 1. 添加请求延迟
  time.sleep(0.1)  # 每次请求间隔100ms
  
  # 2. 分批处理
  batch_size = 100
  for i in range(0, len(stocks), batch_size):
      batch = stocks[i:i+batch_size]
      process_batch(batch)
      time.sleep(5)  # 每批次间隔
  
  # 3. 断点续传
  # 保存进度，失败后可继续
  ```

#### ❌ 难点2：数据清洗
- **问题**：
  - 停牌股票无数据
  - 新股数据不足
  - ST股票需要过滤
- **解决方案**：
  ```python
  # 过滤条件
  if 'ST' in name or '*' in name:
      continue  # 跳过ST股票
  
  if len(df) < 12:  # 至少3年数据（12个季度）
      continue
  ```

#### ❌ 难点3：复权处理
- **问题**：除权除息导致价格不连续
- **解决方案**：
  ```python
  # 统一使用前复权数据
  adjust="qfq"
  ```

### 3.2 季线数据特点

#### ⚠️ 难点4：数据量大，K线少
- **季线特点**：
  - A股一年只有4根K线
  - 5年数据也只有20根K线
  - 相比周线（一年52根），信号少很多
  
- **影响**：
  - 3根K线规则需要至少3个季度（9个月）才能判断
  - 信号出现频率低
  - 一旦出现，持续性可能更强

#### ✅ 优势：
- 过滤了短期噪音
- 更适合长线投资
- 趋势更稳定

### 3.3 股票市场特性

#### ❌ 难点5：涨跌停限制
- **问题**：股票有±10%涨跌停（ST股±5%）
- **影响**：
  - 突破可能延迟（涨停板阻力）
  - 止损可能失效（跌停板无法卖出）
- **建议**：
  - 突破价设置在涨停板以内
  - 止损策略需要考虑极端情况

#### ❌ 难点6：个股基本面变化
- **问题**：
  - 业绩暴雷
  - 重大事件（重组、退市等）
  - 行业周期
- **建议**：
  - 结合基本面筛选（PE、ROE等）
  - 设置市值门槛（如>50亿）
  - 排除行业限制（如*ST、退市风险）

### 3.4 性能优化

#### ❌ 难点7：全量扫描耗时
- **估算**：5000只股票 × 0.2秒 = 1000秒 ≈ 17分钟
- **解决方案**：
  ```python
  # 1. 多进程并行
  from multiprocessing import Pool
  with Pool(4) as p:
      results = p.map(fetch_stock_data, stocks)
  
  # 2. 增量更新
  # 只扫描有变化的股票
  # 缓存历史数据
  
  # 3. 分层筛选
  # 第一步：简单条件快速过滤（市值、成交量）
  # 第二步：技术指标详细分析
  ```

## 四、推荐实施步骤

### 阶段1：原型验证（1-2天）
```
1. 选取10-20只代表性股票测试
2. 验证数据获取和转换逻辑
3. 确认KDJ计算准确性
4. 测试规则匹配效果
```

### 阶段2：批量处理（3-5天）
```
1. 实现全量股票扫描
2. 添加异常处理和日志
3. 优化性能（并行、缓存）
4. 生成筛选报告
```

### 阶段3：定期更新（持续）
```
1. 每季度末自动运行
2. 增量更新机制
3. 结果可视化（集成到前端）
4. 添加回测功能
```

## 五、与期货筛选的对比

| 维度 | 期货周线 | 股票季线 |
|------|---------|---------|
| K线数量 | 一年52根 | 一年4根 |
| 数据获取 | 62个品种，快速 | 5000+股票，耗时 |
| 信号频率 | 高 | 低 |
| 适用周期 | 短中期（周、月） | 长期（季、年） |
| 市场特性 | 双向交易，T+0 | 单向做多，T+1 |
| 风险控制 | 止损灵活 | 涨跌停限制 |

## 六、示例代码（MVP版本）

```python
# minimal_stock_scanner.py
"""
最小可行版本：筛选蓄势的股票（季线）
"""
import akshare as ak
import pandas as pd
from datetime import datetime

# 1. 测试样本（先用小样本验证）
TEST_STOCKS = [
    ('000001', '平安银行'),
    ('600519', '贵州茅台'),
    ('000858', '五粮液'),
    ('600036', '招商银行'),
    ('601318', '中国平安'),
]

def main():
    results = []
    
    for code, name in TEST_STOCKS:
        print(f"处理: {name} ({code})")
        
        # 获取季线数据
        df = fetch_quarterly_data(code)
        if df is None or len(df) < 3:
            continue
        
        # 检查规则
        if check_pending_pattern(df):
            results.append({
                'code': code,
                'name': name,
                'data': df.tail(3).to_dict()
            })
    
    # 输出结果
    print(f"\n找到 {len(results)} 只蓄势股票")
    for r in results:
        print(f"  - {r['name']} ({r['code']})")

if __name__ == '__main__':
    main()
```

## 七、总结

### ✅ 可行性：高
- 技术方案成熟（已在期货验证）
- 数据源可靠（AKShare）
- 逻辑可复用

### ⚠️ 主要挑战
1. **性能问题**：5000+股票扫描耗时
2. **数据质量**：停牌、ST股需过滤
3. **信号频率低**：季线一年只有4根K线

### 💡 建议
1. **先做小规模测试**（10-20只股票）
2. **优化扫描策略**（多进程、增量更新）
3. **结合基本面**（市值、PE、行业）
4. **定期运行**（每季度末，不需要每天）

**结论**：技术上完全可行，建议从MVP版本开始，逐步优化和扩展。
