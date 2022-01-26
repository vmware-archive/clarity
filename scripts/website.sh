#!/usr/bin/env bash

echo "Deploy a preview that can be promoted to clarity.design when we are ready"
# Deploy a preview that can be promoted to production when we are ready
./node_modules/.bin/netlify deploy --json --dir=./dist/website --message="Website - $GITHUB_REF@$GITHUB_SHA" --site "clarity.design"

