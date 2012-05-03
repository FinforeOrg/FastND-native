FastND Native Mobile Apps
==============================

Support
-------
FastND supports both small-screens(smartphones) and large-screens(tablets), with universal apps, for the following platforms:

* Android 2.3+
* iOS 5+
* BlackBerry OS 6+


Build
-----
We're using [PhoneGap Build](https://build.phonegap.com/) to build the native apps for multiple platforms.

The build tool uses the `config.xml` file located in the root of the app, for various configurations.

Additional details about the build process and configuration are available in the [PhoneGap Build Docs](https://build.phonegap.com/docs).


Details
-------
The native version of FastND is at it's core the `production` version of the web app, with a few minor differences:

* `index.html` is different, to load the files needed by PhoneGap, and it's plugins.
* Config `/webapp/config.js` is different, to define the `finforeNative` variable as `true`. We're using this variable to provide different behaviour for the native apps.
* External Urls open inside the app, in a different WebView, by using the [ChildBrowser PhoneGap Plugin](https://github.com/alunny/ChildBrowser/)
* Social Sign-In also uses the ChildBrowser plugin, to open the 3rd party (Facebook, Google, etc.) urls inside the app. When the ChildBrowser view is redirected to the callback (after Login, for ex.), the app closes it.

In addition to the web app, the native app includes extra files:

* `config.xml`, representing the PhoneGap build configuration
* `childbrowser.js`, representing the PhoneGap ChildBrowser Plugin
* Icons and Splash screens located in `/images`