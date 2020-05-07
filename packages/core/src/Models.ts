import React from 'react';

import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { Store } from 'redux';
import { Task } from 'redux-saga';

interface IStaticProps {
  isServer?: boolean;
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

export interface IRoute extends RouteProps {
  routes?: IRoute[];
}
