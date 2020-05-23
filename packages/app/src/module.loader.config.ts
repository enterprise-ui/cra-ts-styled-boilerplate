import { IApplicationConfig } from 'cra-ts-styled-boilerplate-core';

const MODULE_LOADER_CONFIG: IApplicationConfig = {
  modules: {
    '/pages': {
      moduleName: 'pages.js',
      publicPath: '/modules/main',
    },
  },
};

export type { IApplicationConfig };

export default MODULE_LOADER_CONFIG;
