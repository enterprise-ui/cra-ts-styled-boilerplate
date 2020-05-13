import React from 'react';

import { IPersistedStore } from 'cra-ts-styled-boilerplate-core';
import { Provider } from 'react-redux';
import { StaticRouterContext } from 'react-router';
import { StaticRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';

import { App } from './App';

export const AppContainerServer = (
  path: string,
  { store }: IPersistedStore,
  context: StaticRouterContext,
) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={{ mode: 'dark' }}>
          <GlobalStyle />
          <Router location={path} context={context}>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};
