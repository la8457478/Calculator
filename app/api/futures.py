from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import desc
from app.core.database import get_db
from app.models.futures import FutureContract, FutureKlineWeekly
from fastapi.responses import JSONResponse
import subprocess
import os

router = APIRouter()

@router.post("/trigger_fetch")
def trigger_fetch_futures(db: Session = Depends(get_db)):
    """
    手动触发期货数据爬取与入库
    注意：此操作耗时较长（可能几十秒到几分钟），生产环境建议改为异步任务(Celery等)
    """
    try:
        # 获取项目根目录 (Calculator/)
        base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
        fetch_script = os.path.join(base_dir, "fetch_futures.py")
        seed_script = os.path.join(base_dir, "app", "scripts", "seed_futures.py")
        
        # 1. 执行爬虫程序生成最新的 futures_data.js
        # 注意: 传入 PYTHONPATH 确保能找到 app 模块
        env = os.environ.copy()
        env["PYTHONPATH"] = base_dir
        
        fetch_result = subprocess.run(
            ["python", fetch_script], 
            cwd=base_dir, 
            capture_output=True, 
            text=True,
            env=env
        )
        if fetch_result.returncode != 0:
            return JSONResponse(status_code=500, content={"code": 500, "msg": f"爬虫执行失败: {fetch_result.stderr}"})
            
        # 2. 执行入库程序将最新数据刷入数据库
        seed_result = subprocess.run(
            ["python", seed_script], 
            cwd=base_dir, 
            capture_output=True, 
            text=True,
            env=env
        )
        if seed_result.returncode != 0:
            return JSONResponse(status_code=500, content={"code": 500, "msg": f"数据入库失败: {seed_result.stderr}"})
            
        return JSONResponse(status_code=200, content={"code": 0, "msg": "数据爬取及更新成功"})
        
    except Exception as e:
        return JSONResponse(status_code=500, content={"code": 500, "msg": f"执行出错: {str(e)}"})


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
