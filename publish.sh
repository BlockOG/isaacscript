#!/bin/bash

set -e # Exit on any errors

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd "$DIR"

# Validate that we are on the correct branch.
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "Error: You must be on the main branch before publishing."
  exit 1
fi

# Validate that we can push and pull to the repository.
git pull --rebase

# Validate that we are logged in to npm.
npm whoami > /dev/null

# Validate command-line arguments.
if [ -z "$1" ]; then
  echo "Error: The package name is required."
  exit 1
fi
PACKAGE_NAME="$1"

PACKAGE_DIR="$DIR/packages/$PACKAGE_NAME"
if ! test -d "$PACKAGE_DIR"; then
  echo "Error: The directory of \"$PACKAGE_DIR\" does not exist."
  exit 1
fi

cd "$PACKAGE_DIR"

if [ -z "$2" ]; then
  echo "Error: The version bump description is required."
  exit 1
fi
VERSION_BUMP="$2"

# Before bumping the version, check to see if this package compiles (so that we can avoid
# unnecessary version bumps).
bash "$PACKAGE_DIR/build.sh"

# Normally, the "version" command of the packager manager will automatically make a Git commit for
# you. However:
# - The npm version command is bugged with subdirectories:
#   https://github.com/npm/cli/issues/2010
# - The yarn version command is bugged with with spaces inside of the --message" flag.
# Thus, we manually revert to doing a commit ourselves.
if [ "$VERSION_BUMP" == "dev" ]; then
  npm version --prerelease --preid=dev --commit-hooks=false
elif [ "$VERSION_BUMP" == "major" ] || [ "$VERSION_BUMP" == "minor" ] || [ "$VERSION_BUMP" == "patch" ]; then
  npm version --new-version $VERSION_BUMP --commit-hooks=false
else
  npm version --set-version $VERSION_BUMP --commit-hooks=false
fi

# Manually make a Git commit. (See above comment.)
git add package.json yarn.lock
# https://gist.github.com/DarrenN/8c6a5b969481725a4413
NEW_VERSION=$(npm pkg get version | sed 's/"//g')
COMMIT_MESSAGE="chore(release): $PACKAGE_NAME-$NEW_VERSION"
git commit --message "$COMMIT_MESSAGE"
TAG="$PACKAGE_NAME-$NEW_VERSION"
git tag "$TAG"
git push --set-upstream origin main

# We have to build again after bumping the version so that the new "package.json" file gets copied
# to the "dist" directory.
bash "$PACKAGE_DIR/build.sh"

# Upload the package to npm.
# The "--access=public" flag is only technically needed for the first publish, but it is saved here
# for posterity.
cd "$DIR/dist/packages/$PACKAGE_NAME"
if [ "$VERSION_BUMP" == "dev" ]; then
  NPM_TAG=next
else
  NPM_TAG=latest
fi
npm publish --access=public --tag=$NPM_TAG

sleep 1
bash "$DIR/update.sh"
npx syncpack fix-mismatches --prod --dev
bash "$DIR/packages/isaacscript-cli/update.sh"
bash "$DIR/packages/isaacscript-lint/update.sh"

if ! npx git-dirty; then
  # The current working directory is dirty. (Unintuitively, the "git-dirty" returns 1 if the current
  # working directory is dirty.)
  git commit --all --message "chore: updating dependencies"
  git push --set-upstream origin main
fi
