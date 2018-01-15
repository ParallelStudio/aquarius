const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/client.js',
  output: {
    filename: './static/bundle.js'
  }
};
