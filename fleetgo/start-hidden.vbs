' Chay app FleetGo that (C:\Users\ADMIN\fleet-delivery-app) an, cong 8080
' Truoc do can build giao dien 1 lan: npm run build (trong thu muc app)
appDir = "C:\Users\ADMIN\fleet-delivery-app"
Set sh = CreateObject("WScript.Shell")
sh.CurrentDirectory = appDir
sh.Environment("PROCESS")("PORT") = "8080"
sh.Run "cmd /c node server\index.js >> fleetgo.log 2>&1", 0, False
