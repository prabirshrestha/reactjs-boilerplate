require('./style.less');

import React from 'react';
import App from './components/App';

module.exports = window.App = {
    initialize: function (element) {
        React.render(<App/>, element);
    }
};
