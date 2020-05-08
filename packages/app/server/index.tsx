import React from 'react';

import { IPersistedStore } from 'cra-ts-styled-boilerplate-core';
import { bootstrap } from 'cra-ts-styled-boilerplate-ssr';
import { Provider } from 'react-redux';
import { StaticRouterContext } from 'react-router';
import { StaticRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { usePrefersDarkMode } from '../src/hooks/usePrefersDarkMode';
import { App } from '../src/main/App';
import ROUTES from '../src/routes';
import rootReducer from '../src/store/reducers/rootReducer';
import rootSaga from '../src/store/rootSaga';
import { GlobalStyle } from '../src/styles/global';

const AppContainerServer = (
  path: string,
  { persistor, store }: IPersistedStore,
  context: StaticRouterContext,
) => {
  const prefersDarkMode = usePrefersDarkMode();

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={{ mode: prefersDarkMode ? 'dark' : 'light' }}>
            <GlobalStyle />
            <Router location={path} context={context}>
              <App />
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

bootstrap({
  renderApp: AppContainerServer,
  rootReducer,
  rootSaga,
  routes: ROUTES.PATHS,
  routesConfig: ROUTES.CONFIG,
});
