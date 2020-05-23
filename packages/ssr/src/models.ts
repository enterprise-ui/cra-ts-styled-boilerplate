import { IApplicationConfig } from 'cra-ts-styled-boilerplate-core';
import { IPersistedStore,IRoute } from 'cra-ts-styled-boilerplate-core';
import { StaticRouterContext } from 'react-router';

type TRenderDocumentMethod = (i18n: any, path: string, store: IPersistedStore, routes: IRoute[], context: StaticRouterContext) => JSX.Element;

export interface ISSROptions {
  appConfig: IApplicationConfig;
  spaPackageId: string;
  renderApp: TRenderDocumentMethod;
  routes: string[];
  routesConfig: IRoute[];
}
