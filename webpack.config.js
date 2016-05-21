var ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./webpack/' + ENV + '.config');
var webpack = require('webpack');
var merge = require('lodash/merge');

var config = {
  entry: './src/index.ts',
  output: {
    path:  __dirname + '/dist',
    library: 'rating-stars',
    libraryTarget: 'umd',
    filename: 'rating-stars.js'
  },

  debug: true,
  devtool: '#source-maps',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  externals: {
    '@angular/core': {
      commonjs2: '@angular/core',
      commonjs: '@angular/core'
    },
    // '@angular/common': {
    //   commonjs2: '@angular/common',
    //   commonjs: '@angular/common'
    // },
    'rxjs': {
      commonjs: 'rxjs',
      commonjs2: 'rxjs'
    },
    'zone.js': {
      commonjs: 'zone.js',
      commonjs2: 'zone.js'
    },
    'lodash': {
      'commonjs': 'lodash',
      'commonjs2': 'lodash'
    }
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript', exclude: /node_modules/ }
    ]
  },

  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};

module.exports = merge(config, require('./webpack/' + ENV + '.config'));
