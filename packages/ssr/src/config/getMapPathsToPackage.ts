import { IMapPathToPackageConfig, IPackageRoutesConfig } from '../models';

export default (config: IPackageRoutesConfig): IMapPathToPackageConfig =>
  Object.keys(config).reduce((result, moduleId) => {
    const routes = config[moduleId];

    const configMap = routes.reduce((acc, route) => ({ ...acc, [route]: moduleId }), {});

    return { ...result, ...configMap };
  }, {});
