#!/bin/bash

hugo
scp -r public/* do:/var/www/html/nomoreads.org/public/
rm -r public/
