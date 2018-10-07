const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    clientLogLevel: 'warning',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      // * CSS, SCSS
      {
        test: /\.scss$/,
        use: [
          /*  
           * These loaders will be processed in reverse order. i.e
           * -> sass-loader will transform Sass into CSS
           * -> css-loader parses Css into JS and resolves any
           *    dependencies
           * -> style-loader outputs our CSS into a <style> tag in the
           *    document
           */
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
})