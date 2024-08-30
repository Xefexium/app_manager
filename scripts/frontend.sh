#! /bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

echo "NVM_DIR: $NVM_DIR"

nvm install node
nvm use node
source /home/ubuntu/.bashrc
echo 'Node version'
node -v
echo 'NPM Version'
npm -v
cd /home/ubuntu/website/app_manager_fe
echo "Running build"
npm run build
echo "Serving"
sudo rm -r /var/www/html/*
sudo cp -r build/* /var/www/html
serve -s build
