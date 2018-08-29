var MainPage = require('../pageobjects/main.page');
var assert = require('assert');
var expect = require('chai').expect;

describe('Betting Page - User', function() {
	it('should create cdb cookie after user accepts cookies policy', function() {
        MainPage.open();
        browser.waitForVisible(MainPage.cookieBtn.selector, 5000);
		MainPage.cookieBtn.click();
        assert.equal(MainPage.cookieBtn.isVisible(), false);
        var testcookie = browser.getCookie('cdb');
        /*
        I intended to use expect, however the value for custom errors in expect did not seem to return what I needed
        */
        if (testcookie.name != 'cdb') {
            throw new Error('cdb cookie was not created')
        };
	});
});

describe('Betting Page - User', function() {
    it('should be able to switch to the German language', function() {
        MainPage.langDrop.click();
        browser.waitForVisible(MainPage.langDE.selector, 1000);
        MainPage.langDE.click();
        browser.waitForVisible(MainPage.joinBtn.selector, 1000);
        var joinText = browser.getText(MainPage.joinBtn.selector);
        expect(joinText).to.equal('Anmelden');
    });
});

describe('Betting Page - User', function() {
    it('should be able to switch to the Japanese language', function() {
        MainPage.langDrop.click();
        browser.waitForVisible(MainPage.langJP.selector, 1000);
        MainPage.langJP.click();
        browser.waitForVisible(MainPage.joinBtn.selector, 1000);
        var joinText = browser.getText(MainPage.joinBtn.selector);
        expect(joinText).to.equal('登録');
    });
});

describe('Betting Page - User', function() {
    it('should be able to switch to the Greek language', function() {
        browser.waitForVisible(MainPage.langDrop.selector, 1000)
        MainPage.langDrop.click();
        browser.waitForVisible(MainPage.langGR.selector, 1000);
        MainPage.langGR.click();
        browser.waitForVisible(MainPage.joinBtn.selector, 1000);
        var joinText = browser.getText(MainPage.joinBtn.selector);
        expect(joinText).to.equal('Εγγραφή');
    });
});