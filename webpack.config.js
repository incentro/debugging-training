'use strict';

// Modules
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = function makeWebpackConfig() {
    /**
     * Config
     * Reference: https://webpack.js.org/configuration/
     * This is the object where all configuration gets set
     */
    let config = {};

    config.entry = {
        'debug': './src/assets/scripts/debug.js'
    };

    config.output = {
        path: path.resolve(__dirname, 'dist/assets/scripts/'),
        filename: '[name].js'
    };

    config.plugins = [new HtmlWebpackPlugin({
            filename: '../../index.html',
            template: 'src/index.html'
        })];

    config.devtool = 'source-map';

    // Initialize module
    config.module = {
        rules: [
            {
                test: /\.js$/i,
                loaders: ['babel-loader'],
                exclude: [/node_modules/]
            }
        ]
    };

    return config;
}();
