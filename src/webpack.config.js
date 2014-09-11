var path = require('path');

module.exports = {
    cache: true,
    entry: path.join(__dirname , './js/app.js'),
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]
    },
    externals: {
        "react": "React"
    }
};
