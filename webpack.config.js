/* global process */
var webpack = require('webpack');
var glob = require('glob');

var __DEV__ = (process.env.NODE_ENV || 'development') === 'development' ? true : false;

var reactExternal =  {
	root: 'React',
	commonjs: 'react',
	commonjs2: 'react',
	amd: 'react'
};

module.exports = {

    entry: {
        'app': __DEV__ ? [ 'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server', './src/app.js' ] : ['./src/app.js' ],
        'app.specs': glob.sync("./src/**/*.specs.js")
    },

    output: {
        path: './build/',
        publicPath: '/build/',
        filename: '[name].js',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            { test: /\.js$/, loaders: __DEV__ ? [ 'react-hot', 'babel-loader?stage=0'] : ['babel-loader?stage=0'], exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ],
        noParse: [ /\.min\.js/ ]
    },

    externals: {
        'react': reactExternal,
        'react/addons': reactExternal
    },

    resolve: {
        extensions: [ '', '.js' ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEV__: __DEV__
        }),
        new webpack.optimize.CommonsChunkPlugin('app', 'app.js')
    ]

};