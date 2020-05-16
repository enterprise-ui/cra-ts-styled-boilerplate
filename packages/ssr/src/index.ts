import 'babel-polyfill';

import {
  getRootReducer,
  getRootSaga,
} from 'cra-ts-styled-boilerplate-core';
import {
  CONFIG_ROUTES,
  PagesReducer,
  PagesSagas,
  PATHS as PAGES_PATHS,
} from 'cra-ts-styled-boilerplate-pages';

import { renderApp } from './main/renderApp';
import { bootstrap } from './bootstrap';

bootstrap({
  renderApp,
  rootReducer: getRootReducer({ 'cra-ts-styled-boilerplate-pages': PagesReducer }),
  rootSaga: getRootSaga([PagesSagas]),
  routes: [...PAGES_PATHS],
  routesConfig: [...CONFIG_ROUTES],
  spaPackageId: 'cra-ts-styled-boilerplate-app',
});
