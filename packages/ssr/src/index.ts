import { LoadableComponent } from '@loadable/component';
import compression from 'compression';
import {
  configureStore,
  IMatchedRouteLoadable,
  TRouteComponent,
} from 'cra-ts-styled-boilerplate-core';
import express, { NextFunction, Request, Response } from 'express';
import { StaticRouterContext } from 'react-router';
import { matchRoutes } from 'react-router-config';

import { ISSROptions } from './models';
import renderer from './renderer';

export function bootstrap(options: ISSROptions) {
  const { renderApp, rootReducer, routes, routesConfig } = options;
  const app = express();

  function shouldCompress(req: Request, res: Response) {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  }

  function handleRequest(req: Request, res: Response, next: NextFunction) {
    const persistStore = configureStore(rootReducer);
    const { store } = persistStore;

    const routes: IMatchedRouteLoadable[] = matchRoutes(routesConfig, req.path);

    const preloadAll: Promise<TRouteComponent>[] = routes.map(({ route: { component } }) => {
      const loadable = component as LoadableComponent<any>;

      return loadable.load ? loadable.load() : new Promise((resolve) => resolve(loadable));
    });

    const routeProps = { location: { search: req.url }, match: { params: { id: req.params.id } } };
    const ctx = { props: { ...routeProps, isServer: true }, store };

    Promise.all(preloadAll)
      .then((components) => {
        const promises = components.map((component) => {
          const loadable = (component as any).default || component;

          return loadable.getInitialProps ? loadable.getInitialProps(ctx) : null;
        });

        Promise.all(promises)
          .then((staticProps) => {
            const context: StaticRouterContext = {};
            const AppComponent = renderApp(req.path, persistStore, context);
            const content = renderer(AppComponent, store, { ...staticProps, isServer: false });

            if (context.statusCode === 404) {
              res.status(404);
            }

            res.send(content);
          })
          .catch((err) => {
            next(err);
          });
      })
      .catch((err) => {
        next(err);
      });
  }

  app.use(
    compression({
      level: 2,
      filter: shouldCompress,
    }),
  );

  const port = process.env.PORT || 3000;

  app.use(express.static('public'));

  app.get(routes, handleRequest);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (req.xhr) {
      res.status(500).send({
        errorCode: 500,
        message: 'Internal Server Error',
      });
    } else {
      next(err);
    }
  });

  app.use(handleRequest);

  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
}
