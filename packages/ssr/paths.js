const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = ['js', 'ts', 'tsx', 'json', 'jsx'];
const packageDependencies = [
  'core',
  'pages',
  'uikit',
].map((package) => resolveApp(`../${package}/src`));

module.exports = {
  appBuild: resolveApp('build'),
  appNodeModules: resolveApp('../../node_modules'),
  appSrc: resolveApp('src'),
  babelrc: resolveApp('./babelrc'),
  moduleFileExtensions,
  packageDependencies,
  packageNodeModules: resolveApp('./node_modules'),
  publicPath: resolveApp('../pages/build/static'),
};
