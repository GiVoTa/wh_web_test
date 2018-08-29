var Page = require('./page')

var MainPage = Object.create(Page, {

	cookieBtn: { get: function() { return browser.element('//html/body/div[10]/div/button'); } },
	joinBtn: { get: function() { return browser.element('//*[@id="joinLink"]'); } },
	langDE: { get: function() { return browser.element('//*[@id="de"]'); } },
	langJP: { get: function() { return browser.element('//*[@id="ja"]'); } },
	langGR: { get: function() { return browser.element('//*[@id="el"]'); } },
	langDrop: { get: function() {return browser.element('#subheader-desktop > nav > ul.subheader-right > li a.js-language-button'); } }
});

module.exports = MainPage;