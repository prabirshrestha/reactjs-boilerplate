var webpack = require('webpack');

var variables = {
     __DEV__: (process.env.NODE_ENVIRONMENT || 'development') === 'development' ? true : false
 };

module.exports = {
    cache: true,
    entry: {
        app: variables.__DEV__
            ? [ 'webpack-dev-server/client?http://localhost:3000/build/', './client/main.js']
            : [ './client/main.js' ],
        vendors: ['immutable', 'react']
    },
    output: {
        path: 'build',
        filename: '[name].js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?experimental'},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ],
        noParse: [/\.min\.js/]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new webpack.DefinePlugin(variables),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};
