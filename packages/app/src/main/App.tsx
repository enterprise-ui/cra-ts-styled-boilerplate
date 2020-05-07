import { CONFIG_ROUTES } from 'cra-ts-styled-boilerplate-demo';
import { renderRoutes } from 'react-router-config';

export const App = () => {
  return renderRoutes(CONFIG_ROUTES);
};
