'use strict';

import React from 'react/addons';
import { App } from '../app';

const TestUtils = React.addons.TestUtils;

describe('<App />', () => {

    it('should correctly construct', () => {
        const app = TestUtils.renderIntoDocument(<App />);
        expect(app).toBeDefined();
    });

    it('should correctly set the text to Hello World', () => {
        const app = TestUtils.renderIntoDocument(<App />);
        const div = TestUtils.findRenderedDOMComponentWithTag(app, 'div');
        expect(div.textContent).toBe('Hello World');
    });

});
