@echo off
echo Starting Stock Quarterly Scan...
echo This may take 5-10 minutes.
python fetch_stocks_quarterly.py
echo.
echo Scan complete. Please refresh the web page.
pause
