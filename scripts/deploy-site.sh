#!/bin/bash
# AURMAK Website Deployment Script

echo "🚀 Starting Production Build..."
pnpm build

if [ $? -eq 0 ]; then
    echo "✅ Build Successful."
    
    echo "📦 Preparing Files..."
    cp migration_package/api.php dist/api.php
    cp migration_package/.htaccess dist/.htaccess
    
    echo "📤 Syncing to Hestia Server (88.208.255.166)..."
    # Note: This will ask for your password once unless you add your SSH Key to Hestia.
    scp -r dist/. webuser@88.208.255.166:web/aurmak.com/public_html/
    
    if [ $? -eq 0 ]; then
        echo "🎉 DEPLOYMENT COMPLETE! Your site is live."
    else
        echo "❌ Deployment Failed during file transfer."
    fi
else
    echo "❌ Build Failed. Deployment aborted."
fi
