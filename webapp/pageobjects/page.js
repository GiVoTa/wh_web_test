function Page() {
	this.title = 'My Page';
}

Page.prototype.open = function(path) {
	browser.url('http://sports.williamhill.com/betting/en-gb')
}

module.exports = new Page()