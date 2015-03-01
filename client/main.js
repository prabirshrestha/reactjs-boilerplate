require('./style.less');

import React from 'react';
import App from './components/app';

let APP = {
    initialize(options) {
        React.render(<App/>, options.element);
    }
};

window.APP = APP;

export default APP;
