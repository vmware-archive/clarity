#!/usr/bin/env bash

# This downloads a set of key-value env variables, but blocks any requests that aren't from GitHub Actions
curl -g https://us-central1-clarity-design-system.cloudfunctions.net/actions -o .env
# dotenv loads up the env variables into the shell, then deploys through Netlify

# update website for production storybook urls
# NOTE: this leaves core untouched b/c vuepress code uses the //localhost:6006 url and we are
# replacing the '/localhost:6006' part with 'storybook/angular'
find . -type f -name "*.html" -print0 -path ./website/storybook -prune | xargs -0 perl -pi -e 's/\/localhost:6006\//storybook\/angular\/index.html/g'
find . -type f -name "*.js" -print0 -path ./website/storybook -prune | xargs -0 perl -pi -e 's/\/localhost:6006\//storybook\/angular\/index.html/g'

# Deploy a preview that can be promoted to production when we are ready
node -r dotenv/config -- ./node_modules/.bin/netlify deploy --dir=./dist/website --message="Website - $GITHUB_REF@$GITHUB_SHA" --site "clarity.design"
# Deploy a version to https://next.clarity.design as 'production'
node -r dotenv/config -- ./node_modules/.bin/netlify deploy --dir=./dist/website --message="Website - $GITHUB_REF@$GITHUB_SHA" --site "next.clarity.design"
