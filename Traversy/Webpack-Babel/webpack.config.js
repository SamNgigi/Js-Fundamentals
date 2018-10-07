const path = require("path");

module.exports = {
  entry: {
    app: [
      '@babel/polyfill',
      './src/app.js'
    ]
  },
  output: {
    // * __dirname represents the current directory.
    path: path.resolve(__dirname, 'build'),
    filename: "app.bundle.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          // * Stage-0 does not work so well for 7. We had to remove it.
          presets: ['@babel/preset-env']
        }
      },
    }]
  }
}