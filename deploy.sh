#!/bin/sh
WORKDIR=$(pwd)

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
cd $WORKDIR/sultan/backend-web/
npm ci
cp .env.example .env
sed -i $SED_DB_USER .env
sed -i $SED_DB_PASS .env
npm run seed

# Prepare FE
cd $WORKDIR/ilham/frontend-web/
npm ci
npm run build

cd $WORKDIR

# PM2 Start services
pm2 start ecosystem.config.js --watch --ignore-watch="node_modules"
pm2 startup
pm2 save
