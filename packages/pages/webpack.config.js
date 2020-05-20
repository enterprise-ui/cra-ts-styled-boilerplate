const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const packages = require('./packages');
const paths = require('./paths');
const baseConfig = require('./webpack.common');

const nodeExternalsOptions = {
  whitelist: packages,
};

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return merge(baseConfig, {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',

    devtool: 'inline-source-map',

    entry: {
      main: paths.appSrc,
    },

    output: {
      globalObject: 'this',
      library: 'pages',
      libraryTarget: 'umd',
      filename: 'pages.js',
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
  });
};
