var path = require('path');
var webpack = require('webpack');

var GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: "./public"
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS)
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
            {test: /\.png$/, loader: 'url-loader?limit=10000', exclude: /node_modules/}
        ]
    }
};
