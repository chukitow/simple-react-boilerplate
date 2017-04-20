const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
       test: /\.scss$/,
       use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      },
      {
       test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
       test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new ExtractTextPlugin({
      filename: "[name].[contenthash].css",
      disable: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
     'window.jQuery': 'jquery'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: false,
    port: 8080
  }
};
