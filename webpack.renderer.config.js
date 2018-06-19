const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.config');
const DEV_SERVER_PORT = 9000;

module.exports = merge.smart(baseConfig, {
  target: 'electron-renderer',
  entry: './src/app.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [
          path.resolve(__dirname, 'src', 'main.ts')
        ],
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  devServer: {
    contentBase: '.',
    port: DEV_SERVER_PORT,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
  ]
});