var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  target: 'electron-main',
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
  ]
});