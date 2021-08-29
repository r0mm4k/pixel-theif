const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const babel = require('./loaders/babel.loader.js');
const image = require('./loaders/image.loader.js');
const svg = require('./loaders/svg.loader.js');
const font = require('./loaders/font.loader.js');

const pkg = require('../package.json');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '..', pkg.path.output),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: { '@': path.resolve(__dirname, '..', 'src') },
  },
  plugins: [
    new Dotenv({
      safe: true,
      systemvars: true,
      expand: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
  module: {
    rules: [image(), svg(), font(), babel()],
  },
};
