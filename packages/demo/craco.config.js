const { ESLINT_MODES } = require('@craco/craco');

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig
    }
  }
};
