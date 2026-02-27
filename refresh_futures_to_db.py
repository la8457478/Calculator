"""
手动触发本周期货数据拉取并写入 SQLite 数据库。
直接复用 fetch_futures.py 的核心逻辑（抓取 + KDJ 计算 + 规则判断），
写入目标从 futures_data.js 改为 calculator.db。

注意：今晚（2026-02-27）夜盘属于下周，调用此脚本将只包含日间收盘数据。
"""
import sys
import os
import time
from datetime import datetime, date

# 将项目根目录加入路径，方便导入 app 模块
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# 复用原有抓取逻辑
from fetch_futures import (
    load_futures_list,
    DEFAULT_FUTURES_LIST,
    get_main_and_sub_contracts,
    fetch_contract_data,
)
from app.core.database import SessionLocal
from app.models.futures import FutureContract, FutureKlineWeekly


def upsert_klines(db, contract: FutureContract, contract_data: dict):
    """将已抓取的周线 records 写入/更新数据库"""
    if not contract_data:
        return 0

    specific_code = contract_data["symbol"]
    latest_kdj = contract_data.get("latestKDJ", {})
    records = contract_data.get("data", [])
    written = 0

    for idx, r in enumerate(records):
        try:
            k_date = datetime.strptime(r["date"], "%Y-%m-%d").date()
        except Exception:
            continue

        is_latest = (idx == len(records) - 1)

        existing = db.query(FutureKlineWeekly).filter(
            FutureKlineWeekly.specific_code == specific_code,
            FutureKlineWeekly.date == k_date
        ).first()

        if existing:
            # 已有记录则只更新（防止漏更当日数据）
            existing.open   = r.get("open")
            existing.high   = r.get("high")
            existing.low    = r.get("low")
            existing.close  = r.get("close")
            existing.volume = r.get("volume")
            existing.k      = r.get("K")
            existing.d      = r.get("D")
            existing.j      = r.get("J")
            if is_latest:
                existing.is_long_arranged  = (latest_kdj.get("pattern","") == "多头排列")
                existing.is_short_arranged = (latest_kdj.get("pattern","") == "空头排列")
                r2 = latest_kdj.get("custom_rule_2", "")
                r1 = latest_kdj.get("custom_rule_1", "")
                existing.state_tag = (
                    "S2: 蓄势" if r2 in ("long_pending","short_pending") else
                    "S1: 复苏" if r1 == "long" else
                    "S1: 走弱" if r1 == "short" else ""
                )
        else:
            new_k = FutureKlineWeekly(
                contract_id    = contract.id,
                specific_code  = specific_code,
                date           = k_date,
                open           = r.get("open"),
                high           = r.get("high"),
                low            = r.get("low"),
                close          = r.get("close"),
                volume         = r.get("volume"),
                k              = r.get("K"),
                d              = r.get("D"),
                j              = r.get("J"),
            )
            if is_latest:
                r2 = latest_kdj.get("custom_rule_2", "")
                r1 = latest_kdj.get("custom_rule_1", "")
                new_k.is_long_arranged  = (latest_kdj.get("pattern","") == "多头排列")
                new_k.is_short_arranged = (latest_kdj.get("pattern","") == "空头排列")
                new_k.state_tag = (
                    "S2: 蓄势" if r2 in ("long_pending","short_pending") else
                    "S1: 复苏" if r1 == "long" else
                    "S1: 走弱" if r1 == "short" else ""
                )
            db.add(new_k)
            written += 1

    return written


def refresh_futures_to_db():
    futures_list = load_futures_list() or DEFAULT_FUTURES_LIST
    db = SessionLocal()
    total_new = 0

    print(f"\n[{datetime.now().strftime('%H:%M:%S')}] 开始拉取 {len(futures_list)} 个品种的本周数据（仅含日间收盘，夜盘属于下周）…\n")

    for i, future in enumerate(futures_list, 1):
        name    = future["name"]
        code    = future["code"]
        display = future.get("display", name)

        print(f"[{i}/{len(futures_list)}] {display} ({code})")

        # 1. 获取主力/次主力合约号
        main_code, sub_code = get_main_and_sub_contracts(name)
        if not main_code:
            main_code = f"{code}0"
            print(f"  ⚠ 无法识别主力合约，回退到连续合约 {main_code}")

        # 2. 更新数据库中的品种映射
        contract = db.query(FutureContract).filter(FutureContract.symbol == code).first()
        if not contract:
            contract = FutureContract(symbol=code, name=display.split(" (")[0], main_code=main_code, sub_code=sub_code or "")
            db.add(contract)
            db.commit()
            db.refresh(contract)
        else:
            contract.main_code = main_code
            contract.sub_code  = sub_code or ""
            db.commit()

        # 3. 拉取主力合约周线
        main_data = fetch_contract_data(main_code, "主力")
        if main_data:
            n = upsert_klines(db, contract, main_data)
            total_new += n
            kdj = main_data["latestKDJ"]
            print(f"  ✓ 主力 {main_code}: K={kdj['K']:.1f} D={kdj['D']:.1f} J={kdj['J']:.1f} [{kdj.get('pattern','')}] | 新增 {n} 条")
        else:
            print(f"  ✗ 主力数据获取失败")

        # 4. 拉取次主力合约周线
        if sub_code:
            time.sleep(0.5)
            sub_data = fetch_contract_data(sub_code, "次主力")
            if sub_data:
                n = upsert_klines(db, contract, sub_data)
                total_new += n
                kdj = sub_data["latestKDJ"]
                print(f"  ✓ 次主力 {sub_code}: K={kdj['K']:.1f} D={kdj['D']:.1f} J={kdj['J']:.1f} [{kdj.get('pattern','')}] | 新增 {n} 条")
            else:
                print(f"  ✗ 次主力数据获取失败")

        db.commit()
        time.sleep(0.5)

    db.close()
    print(f"\n[OK] 全部完成，本次新增 {total_new} 条 K 线数据。")


if __name__ == "__main__":
    refresh_futures_to_db()
