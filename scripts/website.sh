#!/usr/bin/env bash

# Move dev app into website
mv -f ./dist/dev ./dist/website/dev

[ "$GITHUB_REF" == "refs/head/angular" ] &&
# Deploy to production
node -r dotenv/config -- ./node_modules/.bin/netlify deploy --json --dir=./dist/website --message="$GITHUB_REF@$GITHUB_SHA" --prod ||
# Deploy a preview
node -r dotenv/config -- ./node_modules/.bin/netlify deploy --json --dir=./dist/website --message="$GITHUB_REF@$GITHUB_SHA"
