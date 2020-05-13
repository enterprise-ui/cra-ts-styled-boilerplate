import React from 'react';

import { LoadableComponent } from '@loadable/component';
import { MatchedRoute } from 'react-router-config';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { Store } from 'redux';
import { Persistor } from 'redux-persist';
import { Task } from 'redux-saga';

export interface IStaticProps {
  isServer?: boolean;
  isServerInitialRender?: boolean
}

interface IRouteProps {
  queryParams?: any;
}

export interface IStore extends Store {
  closeSagas?: any;
  rootTask?: Task;
  runSaga?: any;
  sagaTask?: Task;
}

export interface IPersistedStore {
  persistor: Persistor;
  store: IStore;
}

export interface IContext<TProps> {
  props: IStaticProps & IRouteProps & RouteComponentProps & TProps;
  store: IStore;
}

export type TGetInitialPropsMethod<TProps> = (ctx: IContext<TProps>) => Promise<IStaticProps>;

export type TReactComponentType<TProps = any> = React.ComponentType<
  TProps & RouteComponentProps
> & {
  getInitialProps?: TGetInitialPropsMethod<TProps>;
};

export interface IReactFunctionComponent<TProps>
  extends React.FunctionComponent<TProps & RouteComponentProps> {
  getInitialProps?: TGetInitialPropsMethod<TProps>;
}

export type TRouteComponent =
  | TReactComponentType<any>
  | (LoadableComponent<any> & TReactComponentType<any>);

export interface IRoute extends RouteProps {
  component?: TRouteComponent;
  routes?: IRoute[];
}

export interface IMatchedRouteLoadable extends MatchedRoute<{}> {
  route: IRoute;
}
