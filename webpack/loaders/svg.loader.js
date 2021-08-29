module.exports = () => ({
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false,
            prefixIds: {
              prefixClassNames: false,
            },
          },
        },
      },
    },
    {
      loader: 'file-loader',
      options: {
        name: '[name].[hash:8].[ext]',
        outputPath: 'images/',
      },
    },
  ],
});
