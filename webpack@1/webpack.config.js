var webpack = require('webpack');

module.exports = {
  entry: {
    app: './app.js',
    // vendor: ['jquery', 'underscore']
  },
  output: {
    filename: 'bundle.js'
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  // ]
}
