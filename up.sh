#!/bin/bash

hugo
rsync -av public/ do:/var/www/html/nomoreads.org/public/
rm -r public/
