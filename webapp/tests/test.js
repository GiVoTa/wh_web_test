var webdriverio = require('webdriverio');
var options = {
	desiredCapabilities: {
		browserName: 'chrome',
//		chromeOptions: {
//			args: [
//					'headless',
//					'disable-gpu'
//				],
//		},
	},
};

var cookieBtn = '//html/body/div[10]/div/button';

webdriverio
	.remote(options)
	.init()
	.url('http://sports.williamhill.com/betting/en-gb')
	.getTitle().then(function(title) {
		console.log('Title was: ' + title);
	})
	.pause(2000)
	.click(cookieBtn).then(function() {
		console.log('Login clicked')
	})
	.pause(2000)
	.end();