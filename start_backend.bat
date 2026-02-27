@echo off
cd d:\workspace\Calculator
echo Starting Calculator Backend...
echo URL: http://127.0.0.1:8000/docs
python -m uvicorn app.main:app --reload --port 8000
pause
