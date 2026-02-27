import json
import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from sqlalchemy.orm import Session
from app.core.database import SessionLocal
from app.models.stocks import StockBasic, StockKlineQuarterly

def seed_stocks():
    """从 stock_quarterly_all.json 读取季线数据并落库"""
    json_path = os.path.join(
        os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
        "stock_quarterly_all.json"
    )
    
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    db: Session = SessionLocal()
    
    # 清空旧数据重新入库（最简单可靠的做法）
    db.query(StockKlineQuarterly).delete()
    db.query(StockBasic).delete()
    db.commit()
    
    total_q_count = 0
    
    for info in data:
        code = info.get("code")
        if not code:
            continue
        
        name = info.get("name", code)
        status = info.get("status", "normal")  # pending_long / pending_short / normal
        
        # 1. 保存跟踪池
        stock = StockBasic(code=code, name=name, is_active=True)
        db.add(stock)
        
        # 2. 将扁平的 q1/q2/q3 字段，转为我们设计的 StockKlineQuarterly 行
        # JSON 的结构是: q1_low/q1_high (最早), q2_low/q2_high (中间), q3_low/q3_high (最近)
        # 当前 price 对应 q3 的收盘价
        quarters = [
            {
                "quarter_str": "Q1",
                "q_high": info.get("q1_high"),
                "q_low": info.get("q1_low"),
                "q_close": None,
                "signal": ""
            },
            {
                "quarter_str": "Q2",
                "q_high": info.get("q2_high"),
                "q_low": info.get("q2_low"),
                "q_close": None,
                "signal": ""
            },
            {
                "quarter_str": "Q3",
                "q_high": info.get("q3_high") if info.get("q3_high") else None,
                "q_low": info.get("q3_low") if info.get("q3_low") else None,
                "q_close": info.get("price"),  # 最新价
                "signal": "蓄势多" if status == "pending_long" else ("蓄势空" if status == "pending_short" else "")
            }
        ]
        
        for q in quarters:
            if q["q_high"] is None and q["q_low"] is None:
                continue
            new_q = StockKlineQuarterly(
                code=code,
                quarter_str=q["quarter_str"],
                q_high=q["q_high"],
                q_low=q["q_low"],
                q_close=q["q_close"],
                signal=q["signal"],
                breakout_price=info.get("breakout_price") if q["quarter_str"] == "Q3" else None
            )
            db.add(new_q)
            total_q_count += 1
        
    db.commit()
    db.close()
    print(f"\n[OK] 股票季线数据导入完毕，共导入 {len(data)} 只股票，{total_q_count} 条季线。")


if __name__ == "__main__":
    seed_stocks()
