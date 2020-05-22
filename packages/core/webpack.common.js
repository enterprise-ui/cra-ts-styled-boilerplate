const paths = require('./paths');

module.exports = {
  resolve: {
    extensions: paths.moduleFileExtensions.map((ext) => `.${ext}`),
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              cache: true,
              eslintPath: require.resolve('eslint'),
              resolvePluginsRelativeTo: __dirname,
              useEslintrc: true,
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: [paths.appSrc],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [paths.appSrc],
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [
            require.resolve('@babel/preset-env'),
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-typescript'),
          ],
        },
      },
    ],
  },
};
