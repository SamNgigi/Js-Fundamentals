const path = require('path');

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build')
  }

  /*  
   * What we have above tells Webpack to compile the code in our entry
   * point src/app.js and output it in /build/app.bundle.js/
   */
}