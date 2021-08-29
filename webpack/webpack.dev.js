const CircularDependencyPlugin = require('circular-dependency-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const css = require('./loaders/css.loader.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
  },
  devtool: 'eval-cheap-source-map',
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
  ],
  module: {
    rules: [css()],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    open: true,
  },
});
