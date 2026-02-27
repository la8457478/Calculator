from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.database import engine, Base
from app.core.scheduler import create_scheduler
from app.api import futures, stocks

# 初始化自动建表
Base.metadata.create_all(bind=engine)

@asynccontextmanager
async def lifespan(app: FastAPI):
    """FastAPI 生命周期：启动时开启调度器，关闭时优雅停止"""
    scheduler = create_scheduler()
    scheduler.start()
    yield
    scheduler.shutdown()

app = FastAPI(
    title="Calculator Backend API",
    description="后端 API 服务，为交易计算器提供期货/股票行情数据与规则判断",
    version="1.0.0",
    lifespan=lifespan
)

# 允许跨域（为了浏览器端、微信小程序的调试）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # 开发测试期间全放开
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 注册子路由
app.include_router(futures.router, prefix="/api/futures", tags=["Futures"])
app.include_router(stocks.router, prefix="/api/stocks", tags=["Stocks"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Calculator Backend API"}

@app.get("/api/health")
def health_check():
    return {"status": "ok"}
