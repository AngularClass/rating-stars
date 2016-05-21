var webpack = require('webpack');

module.exports = {
  output: {
    filename: 'rating-stars.min.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
