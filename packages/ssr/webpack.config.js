// const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const paths = require('./paths');
const baseConfig = require('./webpack.common');

const nodeExternalsOptions = {
  whitelist: ['cra-ts-styled-boilerplate-core', 'cra-ts-styled-boilerplate-pages', 'cra-ts-styled-boilerplate-uikit'],
};

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return merge(baseConfig, {
    target: 'node',

    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',

    devtool: 'inline-source-map',

    entry: {
      main: paths.appSrc,
    },

    output: {
      filename: 'www.js',
      globalObject: 'this',
      path: paths.appBuild,
      publicPath: paths.publicPath,
    },

    externals: [
      nodeExternals({
        modulesDir: paths.packageNodeModules,
        ...nodeExternalsOptions,
      }),
      nodeExternals({
        modulesDir: paths.appNodeModules,
        ...nodeExternalsOptions,
      }),
    ],

    plugins: [
      // new CopyWebpackPlugin(
      //   [
      //     { from: PATHS.ASSETS.LOCALES, to: PATHS.BUILD.ASSETS + '/locales' },
      //     { from: PATHS.ASSETS.RESOURCES, to: PATHS.BUILD.ASSETS + '/resources' },
      //   ],
      //   {
      //     copyUnmodified: true,
      //   },
      // ),
    ],
  });
};
