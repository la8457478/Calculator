from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import desc
from app.core.database import get_db
from app.models.futures import FutureContract, FutureKlineWeekly
from fastapi.responses import JSONResponse

router = APIRouter()

@router.get("/list")
def get_futures_list(db: Session = Depends(get_db)):
    """
    获取期货行情列表，提取每个品种 Main/Sub 合约的最后一条 K 线状态
    用于小程序首页卡片渲染
    """
    contracts = db.query(FutureContract).all()
    
    result = []
    for c in contracts:
        item = {
            "name": c.name,
            "code": c.symbol,
            "main": None,
            "sub": None
        }
        
        # 提取主力合约的最新一条周线
        if c.main_code:
            main_k = db.query(FutureKlineWeekly).filter(
                FutureKlineWeekly.specific_code == c.main_code
            ).order_by(desc(FutureKlineWeekly.date)).first()
            
            if main_k:
                item["main"] = {
                    "symbol": c.main_code,
                    "contractType": "主力",
                    "close": main_k.close,
                    "state_tag": main_k.state_tag,
                    "is_long_arranged": main_k.is_long_arranged,
                    "is_short_arranged": main_k.is_short_arranged,
                    "latestKDJ": {
                        "K": main_k.k, "D": main_k.d, "J": main_k.j
                    }
                }
                
        # 提取次主力合约的最新一条周线
        if c.sub_code:
            sub_k = db.query(FutureKlineWeekly).filter(
                FutureKlineWeekly.specific_code == c.sub_code
            ).order_by(desc(FutureKlineWeekly.date)).first()
            
            if sub_k:
                item["sub"] = {
                    "symbol": c.sub_code,
                    "contractType": "次主力",
                    "close": sub_k.close,
                    "state_tag": sub_k.state_tag,
                    "is_long_arranged": sub_k.is_long_arranged,
                    "is_short_arranged": sub_k.is_short_arranged,
                    "latestKDJ": {
                        "K": sub_k.k, "D": sub_k.d, "J": sub_k.j
                    }
                }
                
        result.append(item)
        
    return JSONResponse(status_code=200, content={"code": 0, "msg": "success", "data": result})


@router.get("/kline/{specific_code}")
def get_kline_data(specific_code: str, db: Session = Depends(get_db)):
    """
    获取某个具体合约（如 JM2605）的历史周线数据
    主要用于小程序里的 uCharts 绘图（大小写不敏感）
    """
    klines = db.query(FutureKlineWeekly).filter(
        FutureKlineWeekly.specific_code == specific_code.upper()
    ).order_by(FutureKlineWeekly.date).all()
    
    if not klines:
        raise HTTPException(status_code=404, detail="Contract missing or no kline data")
        
    data_list = []
    for k in klines:
        data_list.append({
            "date": k.date.strftime("%Y-%m-%d"),
            "open": k.open,
            "high": k.high,
            "low": k.low,
            "close": k.close,
            "volume": k.volume,
            "K": k.k,
            "D": k.d,
            "J": k.j
        })
        
    # 获取最后一次计算出的状态标签
    latest_k = klines[-1]
    
    return JSONResponse(status_code=200, content={
        "code": 0, 
        "msg": "success", 
        "data": {
            "symbol": specific_code,
            "state_tag": latest_k.state_tag,
            "klines": data_list
        }
    })
