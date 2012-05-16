/*
 * FastND Configs
 * 
 * Loaded separately, not compressed.
 */

var finforeBaseUrl = 'http://api.fastnd.com', // web service url
	finforeAppUrl = 'http://stage.fastnd.com/', // web app url
	finforeNative = true,
	finforeNativeUrl = window.location.href; // web app url
	
finforeNativeUrl = finforeNativeUrl.replace(finforeNativeUrl.replace(/^.*[\\\/]/, ''), ''); // remove file.html from path

// Make sure there's a trailing slash
if(finforeNativeUrl.charAt(finforeNativeUrl.length - 1) != '/') finforeNativeUrl += '/';
