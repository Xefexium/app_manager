rcon -a 127.0.0.1:27015 -p stg "save"
sleep 5
systemctl restart projectzomboid.service
