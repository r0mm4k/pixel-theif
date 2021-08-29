const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ extract = false } = {}) => {
  const hasLoader = extract ? MiniCssExtractPlugin.loader : 'style-loader';

  return {
    test: /\.css$/i,
    use: [hasLoader, { loader: 'css-loader', options: { sourceMap: true } }],
  };
};
