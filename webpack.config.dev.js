// webpack.config.dev.js
console.log("开发环境...start")
const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'YUI',
            template: 'index.html',
        }),
    ],
});