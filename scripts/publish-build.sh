#!/usr/bin/env bash

echo "Travis runs in the $(pwd) directory"
# Set up the user for commiting and pushing.
git config --global user.email "<mhippely@vmware.com>"
git config --global user.name "clr-team"

SHA=$(git rev-parse HEAD)
MESSAGE=$(git log -1 --pretty=format:%s)

# Clone repositories
git clone https://${GITHUB_OAUTH_BUILD_TOKEN}@github.com/clr-team/clr-angular.git
git clone https://${GITHUB_OAUTH_BUILD_TOKEN}@github.com/clr-team/clr-icons.git
git clone https://${GITHUB_OAUTH_BUILD_TOKEN}@github.com/clr-team/clr-ui.git

declare -a repos=("clr-angular" "clr-icons" "clr-ui")
for repo in "${repos[@]}"
do
    # change to the build repo directory
    cd "./${repo}"
    # Delete all the files from last build
    # A filepath to the dist folder in clraity project
    DIST="$TRAVIS_BUILD_DIR/dist/${repo}/*"
    # Copy all files into the build repo
    cp -rf $DIST .
    # Add any changes to git
    git add -A
    # Commit changes with a link to the vmware/clarity commit on master and its message
    git commit -m "Clarity Build: http://github.com/vmware/clarity/commit/${SHA}\nMessage: ${MESSAGE}"
    # Push changes up the the build repo
    git push
    # Go back up to
    cd ..
done