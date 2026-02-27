from sqlalchemy import Column, Integer, String, Float, Boolean, Date, DateTime
from sqlalchemy.sql import func
from app.core.database import Base

class StockBasic(Base):
    """
    股票标的跟踪池，记录所有需要计算季线的股票代码
    """
    __tablename__ = "stocks_basic"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String(10), unique=True, index=True, nullable=False) # 例如 600519
    name = Column(String(50), nullable=False)                          # 例如 贵州茅台
    is_active = Column(Boolean, default=True)                          # 是否持续跟踪拉取数据
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())


class StockKlineQuarterly(Base):
    """
    股票季线计算宽表
    在 Python 后端根据日K线重采样后计算的最后结果
    """
    __tablename__ = "stocks_kline_quarterly"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String(10), index=True, nullable=False)              # 关联的具体股票如 600519
    quarter_str = Column(String(10), index=True, nullable=False)       # 季度字符串如 '2024Q1'

    # 季度K线属性
    q_high = Column(Float)
    q_low = Column(Float)
    q_close = Column(Float)

    # 形态标签 (比如 蓄势多, 蓄势空 等)
    signal = Column(String(50))
    breakout_price = Column(Float, nullable=True) # 突破做多价/跌破做空价
