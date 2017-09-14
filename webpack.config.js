const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
    filename: "styles.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader :'url-loader',
                options: {
                        limit: 10000
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader"}
                ]
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins:[
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "jquery",
            filename: "jquery.js"
        }),
        // extractSass,
        new webpack.ProvidePlugin({
            "$"                   : "jquery",
            "jQuery"              : "jquery",
            "window.jQuery"       : "jquery"
          }),
    ],
    devtool: "source-map"
};