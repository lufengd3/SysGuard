const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const projConf = require('./src/config.json');
const baseConfig = require('./webpack.base.config');

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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: 'typings-for-css-modules-loader',
          options: {
            modules: true,
            namedExport: true
          }
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  },
  devServer: {
    contentBase: '.',
    port: projConf.DEV_STATIC_SERVER_PORT,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
  ]
});