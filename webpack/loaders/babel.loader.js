module.exports = () => ({
  test: /\.((ts)x?|(js)x?)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
});
