start C:\Zimmermann\MongoDB\bin\mongod.exe --dbpath C:\Users\lyth9_000\WebstormProjects\nodejs_Prototyp\data
sleep 1
node C:\Users\lyth9_000\WebstormProjects\nodejs_Prototyp\server.js
PAUSE
taskkill /IM mongod.exe
close