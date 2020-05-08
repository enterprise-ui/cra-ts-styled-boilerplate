const path = require('path');

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
    configure: (webpackConfig, { env, paths }) => {
      const include =    [
        // packages/app/src',
        webpackConfig.module.rules[1].include,
      ]
      // ../../node_modules/cra-ts-styled-boilerplate-uikit/src is not working, because node_modules is in exclude
      // .concat([
      //   'cra-ts-styled-boilerplate-uikit',
      // ].map(p => path.resolve(__dirname, '../../node_modules', p, 'src')))

      // ../uikit/src works
      .concat([
        'core', 'demo', 'uikit',
      ].map(p => path.resolve(__dirname, '..', p, 'src')))

      console.log('include', include)
      // linter
      webpackConfig.module.rules[1].include = include
      // loader
      webpackConfig.module.rules[2].oneOf[1].include = include

      return webpackConfig
    },
  },
};
