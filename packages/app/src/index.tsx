import './i18n';

import React from 'react';

import { configureStore, getRootReducer, getRootSaga } from 'cra-ts-styled-boilerplate-core';
import { CONFIG_ROUTES, PagesReducer, PagesSagas } from 'cra-ts-styled-boilerplate-pages';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { usePrefersDarkMode } from './hooks/usePrefersDarkMode';
import { GlobalStyle } from './styles/global';
import * as serviceWorker from './serviceWorker';

const { persistor, store } = configureStore(
  getRootReducer({ 'cra-ts-styled-boilerplate-pages': PagesReducer }),
  { isServer: false },
  {},
  getRootSaga([PagesSagas]),
);

const AppContainer = () => {
  const prefersDarkMode = usePrefersDarkMode();

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={{ mode: prefersDarkMode ? 'dark' : 'light' }}>
            <GlobalStyle />
            <Router>
              {renderRoutes([...CONFIG_ROUTES])}
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

if (window.__SSR_DATA__?.isServerInitialRender) {
  ReactDOM.hydrate(<AppContainer />, document.getElementById('root'));
} else {
  ReactDOM.render(<AppContainer />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
