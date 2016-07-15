module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "public/bundle.js"
    },

    devServer: {
        port: 3333,
        inline: true
    },
    devtool: "source-map",
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
            {test: /\.png$/, loader: 'url', exclude: /node_modules/}
        ]
    }
};