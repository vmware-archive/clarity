#!/usr/bin/env bash

mkdir -p logs

# This downloads a set of key-value env variables, but blocks any requests that aren't from GitHub Actions
curl -g https://us-central1-clarity-design-system.cloudfunctions.net/actions -o .env
# dotenv loads up the env variables into the shell, then deploys through Netlify

# Deploy a preview that can be promoted to production when we are ready
node -r dotenv/config -- ./node_modules/.bin/netlify deploy --json --dir=./dist/website --message="Angular Branch - Website - $GITHUB_REF@$GITHUB_SHA" --site "angular.clarity.design" > ./logs/angular.clarity.design.netlify.json
cat ./logs/angular.clarity.design.netlify.json
