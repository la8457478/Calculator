"""
APScheduler 定时任务配置
将现有的 Python 爬取脚本纳入定时调度
- 每周日夜间拉取期货周线 (执行 fetch_futures.py 风格的逻辑)
- 每季末拉取股票季线 (执行 enrich_stock_data.py 并写入 SQLite)
"""
import logging
import os
import sys

# 确保根目录在 Python 路径内
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger

logger = logging.getLogger(__name__)

# ---- 任务函数 ----

def refresh_futures_data():
    """
    每周执行一次：通过 AKShare 拉取期货最新周线，更新 SQLite
    复用了 fetch_futures.py 中的抓取逻辑，但写目标改为数据库
    """
    try:
        logger.info("[Scheduler] 开始更新期货周线数据...")
        # TODO: 迁移 fetch_futures.py 的抓取逻辑，目前先触发 seed 脚本作为过渡方案
        from app.scripts.seed_futures import seed_futures
        seed_futures()
        logger.info("[Scheduler] 期货周线数据更新完成")
    except Exception as e:
        logger.error(f"[Scheduler] 期货数据更新失败: {e}")


def refresh_stocks_data():
    """
    每季度执行一次（3/6/9/12 月的第一天）：拉取股票季线数据
    """
    try:
        logger.info("[Scheduler] 开始更新股票季线数据...")
        from app.scripts.seed_stocks import seed_stocks
        seed_stocks()
        logger.info("[Scheduler] 股票季线数据更新完成")
    except Exception as e:
        logger.error(f"[Scheduler] 股票数据更新失败: {e}")


# ---- 调度器配置 ----

def create_scheduler() -> BackgroundScheduler:
    """
    创建并配置 APScheduler 调度器。
    在 FastAPI lifespan 中启动和关闭。
    """
    scheduler = BackgroundScheduler(timezone="Asia/Shanghai")

    # 每周五 16:00 拉取期货周线（A 股期货收盘后）
    scheduler.add_job(
        refresh_futures_data,
        trigger=CronTrigger(day_of_week="fri", hour=16, minute=0),
        id="refresh_futures",
        replace_existing=True
    )

    # 每季度第一天 01:00 拉取股票季线
    scheduler.add_job(
        refresh_stocks_data,
        trigger=CronTrigger(month="1,4,7,10", day=1, hour=1, minute=0),
        id="refresh_stocks",
        replace_existing=True
    )

    return scheduler
