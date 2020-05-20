import 'babel-polyfill';

import AppConfig from 'cra-ts-styled-boilerplate-config';

import { renderApp } from './main/renderApp';
import { bootstrap } from './bootstrap';

bootstrap({
  appConfig: AppConfig,
  renderApp,
  routes: ['/', '/pages'],
  routesConfig: [],
  spaPackageId: 'cra-ts-styled-boilerplate-app',
});
