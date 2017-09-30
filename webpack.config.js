const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: './Main/script.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'Main')
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }]
    }
};