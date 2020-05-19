import React from 'react';

import { IPersistedStore, IRoute } from 'cra-ts-styled-boilerplate-core';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { StaticRouterContext } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { StaticRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';

export const renderApp = (
  i18n: any,
  path: string,
  { store }: IPersistedStore,
  routes: IRoute[],
  context: StaticRouterContext,
) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={{ mode: 'dark' }}>
          <GlobalStyle />
          <Router location={path} context={context}>
            <I18nextProvider i18n={i18n}>{renderRoutes(routes)}</I18nextProvider>
          </Router>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};
