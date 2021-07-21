#!/usr/bin/env bash

mkdir -p logs

# This downloads a set of key-value env variables, but blocks any requests that aren't from GitHub Actions
curl -g https://us-central1-clarity-design-system.cloudfunctions.net/actions -o .env
# dotenv loads up the env variables into the shell, then deploys through Netlify

# Deploy a preview that can be promoted to production when we are ready
node -r dotenv/config -- ./node_modules/.bin/netlify deploy --json --dir=./dist/adoption --message="Adoption Branch - Adoption Guide - $GITHUB_REF@$GITHUB_SHA" --site "adoption.clarity.design" > ./logs/adoption.clarity.design.netlify.json
cat ./logs/adoption.clarity.design.netlify.json