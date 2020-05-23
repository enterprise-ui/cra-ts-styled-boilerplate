const path = require('path');

const { ESLINT_MODES, whenTest } = require('@craco/craco');
const LoadablePlugin = require('@loadable/webpack-plugin');

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
    configure: (webpackConfig, { env, paths }) => {
      const include =    [
        webpackConfig.module.rules[1].include,
      ]
      .concat([
        'core', 'uikit',
      ].map(p => path.resolve(__dirname, '..', p, 'src')));

      // linter
      webpackConfig.module.rules[1].include = include;
      // loader
      webpackConfig.module.rules[2].oneOf[1].include = include;

      webpackConfig.plugins = webpackConfig.plugins.concat(new LoadablePlugin());

      return webpackConfig
    },
  },
};
