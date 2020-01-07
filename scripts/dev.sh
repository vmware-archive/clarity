#!/usr/bin/env bash

npx netlify deploy --dir=./dist/dev --message="Dev App - $CIRCLE_BRANCH@$CIRCLE_SHA1"
