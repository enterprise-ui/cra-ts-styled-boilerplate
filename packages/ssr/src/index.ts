import 'babel-polyfill';

import {
  AppContainerServer,
  CONFIG_ROUTES,
  PagesReducer,
  PagesSagas,
  PATHS,
} from 'cra-ts-styled-boilerplate-pages';

import { bootstrap } from './bootstrap';

bootstrap({
  publicPath: '../pages/build',
  renderApp: AppContainerServer,
  rootReducer: PagesReducer,
  rootSaga: PagesSagas,
  routes: PATHS,
  routesConfig: CONFIG_ROUTES,
});
