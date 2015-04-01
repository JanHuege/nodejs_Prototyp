start C:\Zimmermann\MongoDB\Server\3.0\bin\mongod.exe --dbpath C:\Users\Jan\WebstormProjects\nodejs_Prototyp\data
sleep 5
node C:\Users\Jan\WebstormProjects\nodejs_Prototyp\server.js
PAUSE
taskkill /IM mongod.exe
close