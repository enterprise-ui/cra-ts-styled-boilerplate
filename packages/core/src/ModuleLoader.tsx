import React from 'react';

import { IApplicationConfig } from 'cra-ts-styled-boilerplate-config';
import { configureStore, IPersistedStore, IRoute } from 'cra-ts-styled-boilerplate-core';
import { Provider } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

interface IOwnProps {
  appConfig: IApplicationConfig;
  initialState?: any;
}

const ModuleLoader: React.FunctionComponent<IOwnProps & RouteComponentProps> = ({
  appConfig,
  initialState = {},
  location,
}) => {
  const [ctx, setContext] = React.useState<{ routes: IRoute[]; store: IPersistedStore | null }>({
    routes: [],
    store: null,
  });

  React.useEffect(() => {
    async function load() {
      const { modules } = appConfig;
      const target = modules[location.pathname];

      if (target) {
        const { reducer, routes, saga } = await target.load();
        // через inject, как инжектить саги?
        const store = configureStore(reducer, { isServer: false }, initialState, saga, false);

        setContext({ routes, store });
      } else {
        setContext({ routes: [], store: null });
      }
    }

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const { routes, store } = ctx;

  return store ? (
    <Provider store={store.store}>
      {store.persistor ? (
        <PersistGate loading={null} persistor={store.persistor}>
          {renderRoutes(routes)}
        </PersistGate>
      ) : (
        renderRoutes(routes)
      )}
    </Provider>
  ) : null;
};

ModuleLoader.displayName = 'ModuleLoader';

const ModuleLoaderRouter = withRouter(ModuleLoader);

export { ModuleLoaderRouter as ModuleLoader };
