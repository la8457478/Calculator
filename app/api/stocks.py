from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import desc
from app.core.database import get_db
from app.models.stocks import StockBasic, StockKlineQuarterly
from fastapi.responses import JSONResponse
import json
import os

router = APIRouter()

# 缓存 JSON 数据，避免每次请求都重新读文件
_STOCK_CACHE = None

def _load_stock_json():
    global _STOCK_CACHE
    if _STOCK_CACHE is None:
        json_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
            "stock_quarterly_all.json"
        )
        with open(json_path, 'r', encoding='utf-8') as f:
            raw = json.load(f)
        # 转换为以 code 为 key 的字典，方便查找
        _STOCK_CACHE = {item["code"]: item for item in raw}
    return _STOCK_CACHE

@router.get("/quarterly")
def get_stocks_quarterly(db: Session = Depends(get_db)):
    """
    获取跟踪池内所有股票及其最近几个季度的价格、形态信号
    用于小程序选股页面的渲染和基于状态标签(蓄势等)过滤
    """
    stocks = db.query(StockBasic).filter(StockBasic.is_active == True).all()
    
    result = []
    
    for s in stocks:
        # 获取最新的季线
        q_lines = db.query(StockKlineQuarterly).filter(
            StockKlineQuarterly.code == s.code
        ).order_by(StockKlineQuarterly.quarter_str).all()
        
        if not q_lines:
            continue
            
        latest_q = q_lines[-1]
        
        # 整理供前端使用的数据格式
        quarters_data = []
        for q in q_lines[-4:]: # 只返给前端最近4个季度用于折线缩略图展示即可
            quarters_data.append({
                "quarter": q.quarter_str,
                "q_high": q.q_high,
                "q_low": q.q_low,
                "close": q.q_close
            })
            
        result.append({
            "code": s.code,
            "name": s.name,
            "signal": latest_q.signal, # 比如 "蓄势多" / "蓄势空"
            "breakout_price": latest_q.breakout_price,
            "quarters": quarters_data
        })
        
    return JSONResponse(status_code=200, content={"code": 0, "msg": "success", "data": result})


@router.get("/kline/{code}")
def get_stock_kline(code: str):
    """
    获取指定股票的日线 K 线 + KDJ + 板块信息
    数据直接从 stock_quarterly_all.json 读取（已経 Python 脚本计算好了 KDJ）
    用于前端詳情頁的 K 線圖 + KDJ 圖繪製
    """
    cache = _load_stock_json()
    item = cache.get(code)
    
    if not item:
        raise HTTPException(status_code=404, detail=f"Stock {code} not found")
    
    # 日线数据格式: {date, open, high, low, close, volume, K, D, J}
    klines = item.get("data", [])
    
    # 季度高低点（前端用于标注季线）
    quarters = []
    for i in range(1, 4):
        q_high = item.get(f"q{i}_high")
        q_low  = item.get(f"q{i}_low")
        if q_high or q_low:
            quarters.append({ "quarter": f"Q{i}", "q_high": q_high, "q_low": q_low })
    
    return JSONResponse(status_code=200, content={
        "code": 0,
        "msg": "success",
        "data": {
            "code":    item["code"],
            "name":    item["name"],
            "sector":  item.get("sector", ""),
            "price":   item.get("price"),
            "status":  item.get("status", "normal"),  # pending_long / pending_short / normal
            "kdj":     item.get("kdj", {}),           # 最新 KDJ
            "quarters": quarters,
            "klines":  klines,
        }
    })
