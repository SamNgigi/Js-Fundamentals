const path = require('path');

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    filename: 'app.bundle.js',
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
}