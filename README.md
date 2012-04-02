# Finfore.net Native Mobile Apps

using PhoneGap

## Required changes after copying the latest Build:

* Replace all '../../' to '../' in both `production.css` files
* Set finforeAppUrl in both `production.js` to `http://live-test.finfore.net` (or current production URL)


## TODO:

* Make sure there's always a trailing slash on finforeAppUrl - both for web app
* Remove slash from + '/socialcallback.html' and '/authorize.html'