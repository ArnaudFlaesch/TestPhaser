/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.ts',
    vendors: ['phaser'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: false,
    open: true,
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'index.html',
        },
        {
          from: 'assets/**/*',
        },
      ],
    }),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true),
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'modules',
          reuseExistingChunk: true,
          filename: '[name].bundle.js',
          chunks: 'all',
        },
      },
    },
  },
};
