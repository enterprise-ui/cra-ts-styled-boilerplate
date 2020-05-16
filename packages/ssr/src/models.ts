import { IPersistedStore, IRoute } from 'cra-ts-styled-boilerplate-core';
import { StaticRouterContext } from 'react-router';
import { Reducer } from 'redux';
import { Saga } from 'redux-saga';

type TRenderDocumentMethod = (i18n: any, path: string, store: IPersistedStore, routes: IRoute[], context: StaticRouterContext) => JSX.Element;

export interface ISSROptions {
  spaPackageId: string;
  renderApp: TRenderDocumentMethod;
  rootReducer: Reducer;
  rootSaga?: Saga;
  routes: string[];
  routesConfig: IRoute[];
}
