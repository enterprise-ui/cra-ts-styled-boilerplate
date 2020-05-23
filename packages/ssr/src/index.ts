import 'babel-polyfill';

import { renderApp } from './main/renderApp';
import { bootstrap } from './bootstrap';
import MODULE_LOADER_CONFIG from './module.loader.config';

bootstrap({
  appConfig: MODULE_LOADER_CONFIG,
  renderApp,
  routes: ['/', '/pages'],
  routesConfig: [],
  spaPackageId: 'cra-ts-styled-boilerplate-app',
});
