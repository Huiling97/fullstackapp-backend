#!/bin/bash

cd /tmp

echo "This is the backend!<hr>Running on $(hostname)" > app.js
node app.js -m SimpleHTTPServer 8080

