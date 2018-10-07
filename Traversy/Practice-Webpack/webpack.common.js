const path = require('path');
// * Removing previous html during build
const CleanWebpackPlugin = require('clean-webpack-plugin');
// * Generate new html after build
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  /*  
   * What we have above tells Webpack to compile the code in our entry
   * point src/app.js and output it in /build/app.bundle.js/
   */

  module: {
    rules: [
      // * Js
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'

          /*  
           * Note that we do not add the babel preset here as we did in
           * Webpack-Babel folder. As in
           * 
           * options: {
           *   presets: ['@babel/preset-env']
           * }
           * 
           * Instead we create a file .babelrc and put our configurations
           * there.
           * 
           * This will prevent Babel from transpiling import and export
           * statements into ES5, and enable dynamic imports. 
           */
        }
      },
      // * Images and Stuff
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'Best App in the world'
    })
  ]
}