import { IApplicationConfig } from './models';

const config: IApplicationConfig = {
  modules: {
    '/pages': {
      load: () => import('cra-ts-styled-boilerplate-pages'),
    },
  },
};

export type { IApplicationConfig };

export default config;
