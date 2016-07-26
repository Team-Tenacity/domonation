var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: "./public"
    },

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
