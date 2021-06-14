#!/usr/bin/env bash

mkdir -p logs

# This downloads a set of key-value env variables, but blocks any requests that aren't from GitHub Actions
curl -g https://us-central1-clarity-design-system.cloudfunctions.net/actions -o .env
# dotenv loads up the env variables into the shell, then deploys through Netlify
node -r dotenv/config -- ./node_modules/.bin/netlify deploy --json --dir=./dist/dev --message="Angular Branch - Dev App - $GITHUB_REF@$GITHUB_SHA" > ./logs/dev.netlify.json
cat ./logs/dev.netlify.json