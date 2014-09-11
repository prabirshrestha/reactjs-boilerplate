/** @jsx React.DOM */
var React = require('react');
require('../css/style.less');

var App = React.createClass({
    render: function () {
        return <div>App</div>;
    }
});

App.initialize = function (element, options) {
    React.renderComponent(<App/>, element);
};

window.App = App;
