import 'babel-polyfill';

import {
  AppContainerServer,
  CONFIG_ROUTES,
  PagesReducer,
  PagesSagas,
  PATHS as PAGES_PATHS,
} from 'cra-ts-styled-boilerplate-pages';

import getMapPathsToPackage from './config/getMapPathsToPackage';
import getRootReducer from './store/getRootReducer';
import getRootSaga from './store/getRootSaga';
import { bootstrap } from './bootstrap';

bootstrap({
  packageIds: ['cra-ts-styled-boilerplate-pages'],
  pathToPackageConfig: getMapPathsToPackage({ 'cra-ts-styled-boilerplate-pages': PAGES_PATHS }),
  renderApp: AppContainerServer,
  rootReducer: getRootReducer({ 'cra-ts-styled-boilerplate-pages': PagesReducer }),
  rootSaga: getRootSaga([PagesSagas]),
  routes: [...PAGES_PATHS],
  routesConfig: [...CONFIG_ROUTES],
});
