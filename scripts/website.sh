#!/usr/bin/env bash

# This downloads a set of key-value env variables, but blocks any requests that aren't from GitHub Actions
curl -g https://us-central1-clarity-design-system.cloudfunctions.net/actions -o .env
# dotenv loads up the env variables into the shell, then deploys through Netlify

# Move dev app into website
mv -f ./dist/dev ./dist/website/dev

[ "$GITHUB_REF" == "refs/head/angular" ] && 
# Deploy to production
node -r dotenv/config -- ./node_modules/.bin/netlify deploy --json --dir=./dist/website --message="$GITHUB_REF@$GITHUB_SHA" --prod ||
# Deploy a preview
node -r dotenv/config -- ./node_modules/.bin/netlify deploy --json --dir=./dist/website --message="$GITHUB_REF@$GITHUB_SHA"