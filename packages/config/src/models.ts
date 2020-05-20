import { IRoute } from 'cra-ts-styled-boilerplate-core';
import { Reducer } from 'redux';
import { Saga } from 'redux-saga';

interface IModule {
  reducer: Reducer;
  routes: IRoute[];
  saga: Saga;
}

interface IModuleConfig {
    load: () => Promise<IModule>;
}

export interface IApplicationConfig {
  modules: {
    [path: string]: IModuleConfig;
  };
}
