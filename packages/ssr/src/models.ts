import { IPersistedStore, IRoute } from 'cra-ts-styled-boilerplate-core';
import { StaticRouterContext } from 'react-router';
import { Reducer } from 'redux';
import { Saga } from 'redux-saga';

type TRenderDocumentMethod = (path: string, store: IPersistedStore, context: StaticRouterContext) => JSX.Element;

export interface ISSROptions {
    packageIds: string[];
    pathToPackageConfig: IMapPathToPackageConfig;
    renderApp: TRenderDocumentMethod;
    rootReducer: Reducer;
    rootSaga?: Saga;
    routes: string[];
    routesConfig: IRoute[];
}

export interface IPackageReducerConfig {
    [packageId: string]: Reducer;
}

export interface IPackageRoutesConfig {
    [packageId: string]: string[];
}

export interface IMapPathToPackageConfig {
    [route: string]: string;
}
