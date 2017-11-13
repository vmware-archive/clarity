#!/usr/bin/env bash

echo "clang version info:";

node_modules/.bin/clang-format --version

echo "Running clang check on source files. Number of changes needed:"

if node_modules/.bin/clang-format -style=file --glob=src/**/*.ts -output-replacements-xml | grep -c "<replacement "; then
    echo "Clang format check failed. One or more files need to be formatted. Please run 'npm run clang:format' and run this script again."
    exit 1
else
    echo "Clang format check passed!"
fi
