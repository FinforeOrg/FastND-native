# Finfore.net Native Mobile Apps

using PhoneGap

## Required changes after copying the latest Build:

* Replace all '../../' to '../' in both `production.css` files
* Set finforeAppUrl in both `production.js` to `http://live-test.finfore.net` (or current production URL)


## TODO:

* Social Sign-in, by busting out of iframe
* Whitelist everything, then try to open _blank links using window.parent.location.href