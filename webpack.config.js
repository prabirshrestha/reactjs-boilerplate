var webpack = require('webpack');

module.exports = {
    cache: true,
    entry: {
        app: ['./client/main.js'],
        vendors: ['react']
    },
    output: {
        path: 'build',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?experimental&optional=runtime'},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ],
        noParse: [/\.min\.js/]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
          'react': __dirname + '/node_modules/react/dist/react-with-addons.min.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
          __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
};