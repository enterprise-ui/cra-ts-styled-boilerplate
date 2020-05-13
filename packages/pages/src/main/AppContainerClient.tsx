import '../i18n';

import React from 'react';

import { configureStore } from 'cra-ts-styled-boilerplate-core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { usePrefersDarkMode } from '../hooks/usePrefersDarkMode';
import rootReducer from '../store/reducers/rootReducer';
import rootSaga from '../store/rootSaga';
import { GlobalStyle } from '../styles/global';

import { App } from './App';

export const AppContainerClient = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const { store, persistor } = configureStore(
    rootReducer,
    { isServer: false },
    window.__PRELOADED_STATE__,
    rootSaga,
  );

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={{ mode: prefersDarkMode ? 'dark' : 'light' }}>
            <GlobalStyle />
            <Router>
              <App />
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};
