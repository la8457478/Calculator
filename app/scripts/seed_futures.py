import json
import re
import os
import sys

# 将应用目录加到 import 路径，方便引入我们写的 SQLAlchemy Model
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from sqlalchemy.orm import Session
from datetime import datetime
from app.core.database import SessionLocal, engine, Base
from app.models.futures import FutureContract, FutureKlineWeekly

def seed_futures():
    """解析 futures_data.js 并落库"""
    js_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), "futures_data.js")
    
    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # JS 里是 const FUTURES_DATA = { ... }; 
    # 我们用正则提取那个 { ... } 的部分转成标准 JSON
    match = re.search(r"const\s+FUTURES_DATA\s*=\s*(\{.*\});", content, re.DOTALL)
    if not match:
        print("[-] 未在 js 中找到 FUTURES_DATA 对象")
        return
        
    data_str = match.group(1)
    # 因为原对象里可能有一些单引号、或者没有闭合的特殊情况，这里前提是生成出来的原本就是标准语法
    # 某些老版本 JS 可能 key 没带双引号，如果碰到了需要用 demjson3。但我们观察代码，它输出的是标准 JSON
    try:
        data_json = json.loads(data_str)
    except json.JSONDecodeError as e:
        print("[-] 解析 JSON 失败:", e)
        return

    db: Session = SessionLocal()
    
    total_kline_count = 0
    
    for symbol, info in data_json.items():
        name = info.get("name", symbol)
        
        main_info = info.get("main") or {}
        sub_info = info.get("sub") or {}
        
        main_code = main_info.get("symbol", "")
        sub_code = sub_info.get("symbol", "")
        
        # 1. 保存品种合约的主子映射
        contract = db.query(FutureContract).filter(FutureContract.symbol == symbol).first()
        if not contract:
            contract = FutureContract(
                symbol=symbol,
                name=name,
                main_code=main_code,
                sub_code=sub_code
            )
            db.add(contract)
            db.commit()
            db.refresh(contract)
        else:
            contract.main_code = main_code
            contract.sub_code = sub_code
            db.commit()
            
        print(f"[+] 准备落库品种 {symbol} {name}, ID={contract.id}")
        
        # 2. 存入 K 线 (遍历 main 和 sub)
        for c_type, c_data in [("main", main_info), ("sub", sub_info)]:
            if not isinstance(c_data, dict):
                continue

            specific_code = c_data.get("symbol", "")
            if not specific_code:
                continue
                
            klines = c_data.get("data", [])
            latest_kdj = c_data.get("latestKDJ", {}) # 存放着最后计算出的 pattern
            
            for k_item in klines:
                try:
                    k_date = datetime.strptime(k_item["date"], "%Y-%m-%d").date()
                except:
                    continue
                    
                # 判重
                exist_k = db.query(FutureKlineWeekly).filter(
                    FutureKlineWeekly.specific_code == specific_code,
                    FutureKlineWeekly.date == k_date
                ).first()
                if exist_k:
                    continue
                    
                # 是否是这只合约的最新一条
                is_latest_item = (k_item == klines[-1])
                
                new_kline = FutureKlineWeekly(
                    contract_id=contract.id,
                    specific_code=specific_code,
                    date=k_date,
                    open=k_item.get("open"),
                    high=k_item.get("high"),
                    low=k_item.get("low"),
                    close=k_item.get("close"),
                    volume=k_item.get("volume"),
                    k=k_item.get("K"),
                    d=k_item.get("D"),
                    j=k_item.get("J"),
                )
                
                # 若是最后一条 K 线，把形态指标打进去
                if is_latest_item and isinstance(latest_kdj, dict):
                    pattern = latest_kdj.get("pattern", "")
                    r1 = latest_kdj.get("custom_rule_1", "")
                    r2 = latest_kdj.get("custom_rule_2", "")
                    
                    new_kline.is_long_arranged = (pattern == "多头排列")
                    new_kline.is_short_arranged = (pattern == "空头排列")
                    
                    # 按照先前 js 和爬虫脚本约定的标签名
                    state_tag = ""
                    if r2 == "long_pending":
                        state_tag = "S2: 蓄势"
                    elif r2 == "short_pending":
                        state_tag = "S2: 蓄势"
                    elif r1 == "long":
                        state_tag = "S1: 复苏"
                    elif r1 == "short":
                        state_tag = "S1: 走弱"
                        
                    new_kline.state_tag = state_tag
                    
                db.add(new_kline)
                total_kline_count += 1
                
        db.commit()

    db.close()
    print(f"\n[OK] 历史期货数据倒腾完毕，共导入 K 线 {total_kline_count} 条。")


if __name__ == "__main__":
    seed_futures()
