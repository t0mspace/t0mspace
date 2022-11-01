#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git checkout main
git merge dev # bring gh-pages up to date with master
git push origin main #commit the changes
git checkout dev

cd -