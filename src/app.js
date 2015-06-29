'use strict';

import React from 'react';

export class App extends React.Component {

    render() {
        return <div>Hello World</div>;
    }

}

// https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
export const reactHotLoaderInjectProvider = module.hot ? require('react-hot-loader/Injection').RootInstanceProvider.injectProvider : undefined;