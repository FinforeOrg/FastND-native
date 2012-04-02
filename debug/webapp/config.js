/*
 * Finfore.net Configs
 * 
 * Loaded separately, not compressed.
 */

var finforeBaseUrl = 'http://api.fastnd.com', // web service url
	finforeAppUrl = window.location.href, // web app url. Make sure there's a trailing slash
	finforeNative = true;
	
finforeAppUrl = finforeAppUrl.replace(finforeAppUrl.replace(/^.*[\\\/]/, ''), ''); // remove file.html from path