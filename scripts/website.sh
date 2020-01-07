#!/usr/bin/env bash

npx netlify deploy --dir=./dist/website --message="Website - $CIRCLE_BRANCH@$CIRCLE_SHA1"
