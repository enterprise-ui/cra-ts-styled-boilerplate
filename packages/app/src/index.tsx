import './i18n';

import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { usePrefersDarkMode } from './hooks/usePrefersDarkMode';
import { App } from './main/App';
import configureStore from './store/configureStore';
import { GlobalStyle } from './styles/global';
import * as serviceWorker from './serviceWorker';

const AppContainer = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const { store, persistor } = configureStore();

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

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
