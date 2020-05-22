const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const merge = require('webpack-merge');
const paths = require('./paths');
const baseConfig = require('./webpack.common');

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return merge(baseConfig, {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',

    devtool: 'inline-source-map',

    entry: paths.appSrc,

    output: {
      filename: 'core.js',
      globalObject: 'this',
      library: 'core',
      libraryTarget: 'umd',
      path: paths.appBuild,
    },

    externals: {
      react: {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
      },
      'react-router': 'react-router',
      'react-router-config': 'react-router-config',
      'react-router-dom': 'react-router-dom',
      'react-redux': 'react-redux',
      redux: {
        root: 'Redux',
        commonjs: 'redux',
        commonjs2: 'redux',
      },
      'redux-logger': 'redux-logger',
      'redux-persist': 'redux-persist',
      'redux-persist/integration/react': 'redux-persist/integration/react',
      'redux-persist/lib/storage': 'redux-persist/lib/storage',
      'redux-saga': {
        root: 'ReduxSaga',
        commonjs: 'redux-saga',
        commonjs2: 'redux-saga',
      },
      'redux-saga/effects': {
        root: 'ReduxSagaEffects',
        commonjs: 'redux-saga/effects',
        commonjs2: 'redux-saga/effects',
      },
      'redux-thunk': 'redux-thunk',
      '@babel/runtime/regenerator': {
        root: 'regeneratorRuntime',
        commonjs: '@babel/runtime/regenerator',
        commonjs2: '@babel/runtime/regenerator',
      },
    },

    plugins: [new BundleAnalyzerPlugin()],
  });
};
