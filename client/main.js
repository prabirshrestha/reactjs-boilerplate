require('./style.less');

var React = require('react');
var App = require('./components/App');

module.exports = window.App = {
	initialize: function (element) {
		React.render(<App/>, element);
	}
};
