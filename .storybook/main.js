const commonConfig = require("../webpack/webpack.dev");

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...commonConfig.resolve.alias,
        }
      },
      module: {
        ...config.module,
        rules: commonConfig.module.rules
      },
  }),
}
