module.exports = () => ({
  test: /\.(png|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'images/[name].[hash:8][ext]',
  },
});
