@echo off
rem Dung FleetGo dang chay an tren cong 8080
for /f "tokens=5" %%p in ('netstat -ano ^| findstr /r /c:":8080 .*LISTENING"') do taskkill /PID %%p /F
echo Da dung FleetGo.
pause
