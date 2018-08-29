var MainPage = require('../pageobjects/main.page');
var assert = require('assert')
var expect = require('chai').expect

describe('Main Page', function() {
	it('should create cdb cookie after user accepts cookies policy', function() {
        MainPage.open();
        browser.waitForVisible(MainPage.cookieBtn.selector, 2000);
		MainPage.cookieBtn.click();
        assert.equal(MainPage.cookieBtn.isVisible(), false)

        var testcookie = browser.getCookie('cdb');
        if (testcookie.name != 'cdb') {
            throw new Error('cdb cookie was not added properly')
        }

	});
});

describe('Main Page', function() {
    it('should be able to switch between different languages', function() {
        MainPage.open();
        //var logintext = browser.getText(MainPage.joinBtn.selector);
        MainPage.langDr.click();
        MainPage.langDE.click();
        var spicy = browser.getText(MainPage.joinBtn.selector);
        expect(spicy).to.equal('Anmelden')
        MainPage.langDr.click();
        MainPage.langJP.click();
        assert.equal(spicy, '登録')
        //var logintext = browser.getText(MainPage.joinBtn.selector);

        
    })
})