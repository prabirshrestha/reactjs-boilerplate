'use strict';

import React from 'react/addons';
import { App } from '../app';

const TestUtils = React.addons.TestUtils;

describe('<App />', () => {

    it('should correctly construct', () => {
        var app = TestUtils.renderIntoDocument(<App />);
        expect(app).toBeDefined();
    });

    it('should correctly set the text to Hello World', () => {
        var app = TestUtils.renderIntoDocument(<App />);
        var div = TestUtils.findRenderedDOMComponentWithTag(app, 'div').getDOMNode();
        expect(div.textContent).toBe('Hello World');
    });

});
