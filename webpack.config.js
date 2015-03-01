var webpack = require('webpack');

module.exports = {
    cache: true,
    entry: {
        app: [
             'webpack-dev-server/client?http://localhost:8080/build/',
            './client/main.js'
        ],
        vendors: ['immutable', 'react', 'reflux']
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
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
          __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};
