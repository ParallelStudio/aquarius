const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/client.js',
  output: {
    filename: './static/bundle.js'
  },
  module: {
    loaders: [
      // magic needed for materialize-loader
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  }
};
