#!/bin/sh
WORKDIR=$(dirname "$(pwd)")

git pull --rebase

cd $WORKDIR/frontend-web/
npm run build

pm2 restart ecosystem.config.js