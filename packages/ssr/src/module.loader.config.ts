import { IApplicationConfig } from 'cra-ts-styled-boilerplate-core';

const MODULE_LOADER_CONFIG: IApplicationConfig = {
  modules: {
    '/pages': {
      moduleName: 'cra-ts-styled-boilerplate-pages',
      publicPath: '/',
    },
  },
};

export type { IApplicationConfig };

export default MODULE_LOADER_CONFIG;
