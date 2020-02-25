const path = require('path')


module.exports = {
  entry: './src/v2.js',
  output: {
    path: __dirname,
    filename: './dist/bodyScrollLock.min.js'
  },

  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  },

}