const { ESLINT_MODES, whenTest } = require('@craco/craco');

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        whenTest(() => ({
          ssr: false,
          displayName: false,
        })),
      ],
    ],
  },
  webpack: {
    // get CRA to read from /packages
    // based off https://github.com/react-workspaces/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js
    configure: (webpackConfig, { env, paths }) => {
      // mainFields = ['main_src', 'main']
      // webpackConfig.resolve.mainFields = mainFields
      return webpackConfig
    }
  }
};
