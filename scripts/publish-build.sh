#!/usr/bin/env bash

# Set up the user for committing and pushing.
git config --global user.email "<mhippely@vmware.com>"
git config --global user.name "clr-team"

# Gets the git commit sha currently at HEAD
SHA=$(git rev-parse HEAD)
# Gets the commit message at HEAD
MESSAGE=$(git log -1 --pretty=format:%s)
NEWLINE=$'\n'

declare -a repos=("clr-angular" "clr-icons" "clr-ui")
for repo in "${repos[@]}"
do
    # Clone build repository, error out if command fails
    if ! git clone https://${GITHUB_OAUTH_BUILD_TOKEN}@github.com/clr-team/${repo}.git --depth 1
    then
        # Echo an informative message and redirect it to stderr
        echo "Failed to clone ${repo}" >&2
        # Exit with unspecified error code
        exit 1
    fi

    # change to the build repo directory
    cd "./${repo}"

    # A filepath to the dist folder in clraity project
    DIST="$TRAVIS_BUILD_DIR/dist/${repo}/*"

    # Copy all files into the build repo
    cp -rf $DIST .

    # Add any changes and commit to the local repo
    git add -A
    git commit -m "Clarity Build: ${MESSAGE}${NEWLINE}http://github.com/vmware/clarity/commit/${SHA}":

    # Push changes up the the build repo, error out if command fails
    if ! git push
    then
        # Echo an informative message and redirect it to stderr
        echo "Failed to push changes to ${repo} build repository" >&2
        # Exit with unspecified error code
        exit 1
    fi

    # Go back up to root
    cd ..
done
exit 0