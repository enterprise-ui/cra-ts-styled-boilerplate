import rootReducer from './store/reducers/rootReducer';
import rootSaga from './store/rootSaga';
import { CONFIG_ROUTES, PATHS, ROUTES } from './routes';

export {
  CONFIG_ROUTES,
  PATHS,
  ROUTES,
  rootSaga as PagesSagas,
  rootReducer as PagesReducer,
};
