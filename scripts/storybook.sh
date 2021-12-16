#!/usr/bin/env bash

echo "Download key-value env variables"
curl -g https://us-central1-clarity-design-system.cloudfunctions.net/actions -o .env
# dotenv loads up the env variables into the shell, then deploys through Netlify

# Hack to ensure the file above is written before the next commands fire
sleep 5

if [ "$GITHUB_REPOSITORY" == "vmware/clarity" ] && [ "$GITHUB_REF_NAME" == "next" ];
then

echo "Deploy to production"
node -r dotenv/config -- ./node_modules/.bin/netlify deploy --json --dir=./dist/storybook --message="$GITHUB_REF@$GITHUB_SHA" --site "storybook.clarity.design" --prod

else

echo "Deploy a preview"
node -r dotenv/config -- ./node_modules/.bin/netlify deploy --json --dir=./dist/storybook --message="$GITHUB_REF@$GITHUB_SHA" --site "storybook.clarity.design"

fi
