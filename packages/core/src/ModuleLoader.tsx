import React from 'react';

import { IApplicationConfig } from 'cra-ts-styled-boilerplate-config';
import { configureStore, IPersistedStore,IRoute } from 'cra-ts-styled-boilerplate-core';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Link, useHistory } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

interface IOwnProps {
  appConfig: IApplicationConfig;
}

const ModuleLoader: React.FunctionComponent<IOwnProps> = ({ appConfig }) => {
  const { modules } = appConfig;

  const [router, setRouter] = React.useState(<Link to="/pages">Pages</Link>);
  const [routes, setRoutes] = React.useState<IRoute[]>([]);
  const [store, setStore] = React.useState<IPersistedStore | null>(null);

  const history = useHistory();

  React.useEffect(() => {
    history.listen(async (location) => {
      console.log(location);
      const target = modules[location.pathname];

      if (target) {
        const { reducer, routes, saga } = await target.load();

        setRoutes(routes);
        setStore(configureStore(reducer, { isServer: false }, {}, saga, false));
      } else {
        setRoutes([]);
        setStore(null);
      }
    });
  }, [history, modules]);

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
  ) : (
    router
  );
};

ModuleLoader.displayName = 'ModuleLoader';

export { ModuleLoader };
