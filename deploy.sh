#!/bin/env bash

docker-compose run jekyll /bin/bash -c 'JEKYLL_ENV=production jekyll build'
git checkout gh-pages
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$BRANCH" != "gh-pages" ]]; then
  echo 'Aborting script, not on gh-pages branch';
  rm -rf _site;
  exit 1;
fi
cp -r _site/* . && rm -rf _site/ && touch .nojekyll
echo "numericalshadow.org" >> CNAME
git add .nojekyll
git add *
git commit -m 'update built site'
git push -f
git checkout master
