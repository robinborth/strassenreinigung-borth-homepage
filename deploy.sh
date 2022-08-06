#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ robin@172.104.234.138:/var/www/strassenreinigung-borth.de
echo "Deployment complete"
