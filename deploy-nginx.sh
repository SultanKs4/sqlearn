#!/bin/sh
# create modsite
DOMAIN_FE="sqlearn.sultanachmad.me"
DOMAIN_BE="api.sqlearn.sultanachmad.me"
FILE_PATH="/usr/local/bin/nginx-modsite"
sudo curl https://raw.githubusercontent.com/ajsalkeld/nginx-modsite/master/nginx-modsite >> $FILE_PATH
sudo chmod +x $FILE_PATH

# create log path
LOG_PATH="/var/log/nginx/$DOMAIN_FE"
sudo mkdir -p $LOG_PATH/access.log
sudo mkdir -p $LOG_PATH/error.log

# Copy nginx conf file to sites-available
NGINX_CONF_PATH="/etc/nginx/sites-available/$DOMAIN_FE"
sudo cp nginx-host $NGINX_CONF_PATH

# replace conf file
sudo sed -i "s/DOMAIN_BE/$DOMAIN_BE/g" $NGINX_CONF_PATH
sudo sed -i "s/DOMAIN_FE/$DOMAIN_FE/g" $NGINX_CONF_PATH
sudo sed -i "s/LOG_PATH/$LOG_PATH/g" $NGINX_CONF_PATH
sudo sed -i "s/WORKDIR/$WORKDIR/g" $NGINX_CONF_PATH

# test nginx conf
sudo nginx -t