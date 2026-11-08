@echo off
rem Chay app FleetGo that (C:\Users\ADMIN\fleet-delivery-app), cong 8080, co cua so
title FleetGo - cong 8080 (dong cua so nay de dung)
netstat -ano | findstr /r /c:":8080 .*LISTENING" >nul
if not errorlevel 1 (
  echo FleetGo da dang chay tren cong 8080. Chay stop-fleetgo.bat truoc neu muon mo lai.
  pause
  exit /b
)
cd /d "C:\Users\ADMIN\fleet-delivery-app"
set PORT=8080
node server\index.js
pause
