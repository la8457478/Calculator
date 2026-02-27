from sqlalchemy import Column, Integer, String, Float, Boolean, Date, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base

class FutureContract(Base):
    """
    期货品种主表，用于维护例如 焦煤(JM) 及其当前的主力/次主力合约号
    """
    __tablename__ = "futures_contract"

    id = Column(Integer, primary_key=True, index=True)
    symbol = Column(String(20), unique=True, index=True, nullable=False)   # 例如: jm
    name = Column(String(50), nullable=False)                              # 例如: 焦煤
    main_code = Column(String(20))                                         # 当前当月主力, 如 jm2405
    sub_code = Column(String(20))                                          # 当前次主力, 如 jm2409
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())

    # 一对多关系：一个品种可以有多条周线记录（方便历史查询，虽然实际上我们是把合约名作为独立查询条件）
    klines = relationship("FutureKlineWeekly", back_populates="contract")


class FutureKlineWeekly(Base):
    """
    具体的期货宽表，存储计算好的 KDJ 和 形态结果
    为提升小程序的响应速度，这些都在 Python 定时脚本存入，API 直接读取
    """
    __tablename__ = "futures_kline_weekly"

    id = Column(Integer, primary_key=True, index=True)
    contract_id = Column(Integer, ForeignKey("futures_contract.id"))
    specific_code = Column(String(20), index=True, nullable=False) # 具体合约，如 jm2405
    date = Column(Date, index=True, nullable=False)                # 周线最后一天

    # K线属性
    open = Column(Float)
    high = Column(Float)
    low = Column(Float)
    close = Column(Float)
    volume = Column(Integer)

    # 预计算出的指标
    k = Column(Float)
    d = Column(Float)
    j = Column(Float)

    # 形态及状态计算结果
    is_long_arranged = Column(Boolean, default=False)
    is_short_arranged = Column(Boolean, default=False)
    state_tag = Column(String(50))   # 如 'S2: 蓄势', '震荡' 
    
    # 策略突破点备查
    breakout_buy_price = Column(Float, nullable=True)
    stop_loss_price = Column(Float, nullable=True)

    contract = relationship("FutureContract", back_populates="klines")
