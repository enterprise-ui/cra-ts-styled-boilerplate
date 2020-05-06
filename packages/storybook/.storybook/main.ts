// @ts-ignore
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(mdx|tsx|ts|jsx|js)'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          shouldExtractLiteralValuesFromEnum: true,
          propFilter: (prop: any) => {
            // Currently not working, prop.parent is always null.
            if (prop.parent) {
              return !prop.parent.fileName.includes('node_modules/@types/react/');
            }

            return true;
          },
        },
      },
    },
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (webpackConfig: any) => {

    // console.log('webpackConfig')
    // console.log(webpackConfig.module.rules)

    const include =webpackConfig.module.rules[2].include.concat([
      'uikit',
    ].map(p => path.resolve(__dirname, '../..', p, 'src')))

    webpackConfig.module.rules[2].include = include

    webpackConfig.module.rules[3].oneOf[1].include = include
    // Return the altered config
    return webpackConfig;
  },

};
