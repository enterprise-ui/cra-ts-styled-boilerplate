import { IApplicationConfig } from './models';

// перенести в сорцы приложения packafes/app
const config: IApplicationConfig = {
  modules: {
    '/pages': {
      load: () => import('cra-ts-styled-boilerplate-pages'), // убрать
      // moduleName
      // publicPath
    },
  },
};

export type { IApplicationConfig };

export default config;
