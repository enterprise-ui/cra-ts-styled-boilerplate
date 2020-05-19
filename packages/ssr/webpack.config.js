// const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const packages = require('./packages');
const paths = require('./paths');
const baseConfig = require('./webpack.common');

console.log(packages);

const nodeExternalsOptions = {
  whitelist: packages,
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
