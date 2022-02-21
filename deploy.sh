#!/bin/sh

docker-compose run jekyll /bin/bash -c 'JEKYLL_ENV=production jekyll build'
git checkout gh-pages
cp -r _site/* . && rm -rf _site/ && touch .nojekyll
git add *
git commit -m 'update built site'
git push
git checkout master
rm .nojekyll
