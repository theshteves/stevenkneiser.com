#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build
bundle exec htmlproofer ./_site --url-ignore "/^/.*/","https://fonts.gstatic.com/","https://pages.convertkit.com/","/^https:\/\/twitter\.com.*/"
