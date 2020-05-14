import React from 'react';

import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { I18nextProvider } from 'react-i18next';
import { Router } from 'react-router-dom';

import i18n from '../i18n';

import { App } from './App';

const renderWithRouter = (
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => ({
  ...render(
    <I18nextProvider i18n={i18n}>
      <Router history={history}>{ui}</Router>
    </I18nextProvider>,
  ),
  history,
});

test('full app rendering', () => {
  const { getByText } = renderWithRouter(<App />);
  const linkElement = getByText(/Learn React!/i);
  expect(linkElement).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const route = '/something-that-does-not-match';
  const { getByText } = renderWithRouter(<App />, {
    route,
  });
  const linkElement = getByText(/This page could not be found./i);
  expect(linkElement).toBeInTheDocument();
});
