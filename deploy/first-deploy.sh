#!/bin/sh
WORKDIR=$(dirname "$(pwd)")

LIST_PACKAGES="expect nodejs yarn build-essential gcc g++ make mariadb-server nginx certbot python3-certbot-nginx"

# Add nodesource PPA for nodejs 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y $LIST_PACKAGES

#mariadb config
SECURE_DB=$(expect -c "
set timeout 5
spawn sudo mysql_secure_installation
expect \"Enter current password for root (enter for none):\"
send \"$MYSQL\r\"
expect \"Change the root password?\"
send \"n\r\"
expect \"Remove anonymous users?\"
send \"y\r\"
expect \"Disallow root login remotely?\"
send \"y\r\"
expect \"Remove test database and access to it?\"
send \"y\r\"
expect \"Reload privilege tables now?\"
send \"y\r\"
expect eof
")

echo "$SECURE_DB"

# Create user db
DB_USERNAME="skripsi"
DB_PASSWORD="$(openssl rand -base64 12)"
sudo mysql -e "CREATE USER '${DB_USERNAME}'@'localhost' IDENTIFIED BY '${DB_PASSWORD}';"
sudo mysql -e "GRANT ALL PRIVILEGES ON *.* TO '${DB_USERNAME}'@'localhost' WITH GRANT OPTION;"
sudo mysql -e "FLUSH PRIVILEGES;"

#Install PM2
sudo npm install pm2 -g

SED_DB_USER="s/DB_USER=root/DB_USER=$DB_USERNAME/g"
SED_DB_PASS="s/DB_PASS=/DB_PASS=$DB_PASSWORD/g"

# Preare BE Assessment
cd backend-assessment/
npm ci
cp .env.example .env
sed -i $SED_DB_USER .env
sed -i $SED_DB_PASS .env

# Prepare BE Web
cd $WORKDIR/backend-web/
npm ci
cp .env.example .env
sed -i $SED_DB_USER .env
sed -i $SED_DB_PASS .env
npm run seed

# Prepare FE
cd $WORKDIR/frontend-web/
npm ci
sed -i "s|http://localhost:3000|https://sqlearn.sultanachmad.me|g" pages/login.js
cp .env.local.example .env.local
sed -i "s|domain|https://sqlearn.sultanachmad.me|g" .env.local
sed -i "s|contohsecret|$(openssl rand -base64 32)|g" .env.local
npm run build

cd $WORKDIR

# PM2 Start services
pm2 startOrRestart ecosystem.config.js
pm2 startup
pm2 save

# create modsite
DOMAIN_FE="sqlearn.sultanachmad.me"
DOMAIN_BE="api.sqlearn.sultanachmad.me"
FILE_PATH="/usr/local/bin/nginx-modsite"
sudo curl https://raw.githubusercontent.com/ajsalkeld/nginx-modsite/master/nginx-modsite > $FILE_PATH
sudo chmod +x $FILE_PATH

# create log path
LOG_PATH="/var/log/nginx/$DOMAIN_FE"
sudo mkdir -p $LOG_PATH
sudo touch $LOG_PATH/access.log
sudo touch $LOG_PATH/error.log

# Copy nginx conf file to sites-available
NGINX_CONF_PATH="/etc/nginx/sites-available/$DOMAIN_FE"
sudo cp deploy/nginx-host $NGINX_CONF_PATH

# replace conf file
sudo sed -i "s/DOMAIN_BE/$DOMAIN_BE/g" $NGINX_CONF_PATH
sudo sed -i "s/DOMAIN_FE/$DOMAIN_FE/g" $NGINX_CONF_PATH
sudo sed -i "s|LOG_PATH|$LOG_PATH|g" $NGINX_CONF_PATH
sudo sed -i "s|WORKDIR|$WORKDIR|g" $NGINX_CONF_PATH

# test nginx conf
sudo nginx -t

# nginx-modsite enable site
NGINX_MODSITE=$(expect -c "
set timeout 5
spawn sudo nginx-modsite -e $DOMAIN_FE
expect \"Would you like to reload the Nginx configuration now? (Y/n)\"
send \"y\r\"
expect eof
")

echo "$NGINX_MODSITE"

# cerbot must do manual :)