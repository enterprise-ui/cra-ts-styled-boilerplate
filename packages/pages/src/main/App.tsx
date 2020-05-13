import { CONFIG_ROUTES } from 'cra-ts-styled-boilerplate-pages';
import { renderRoutes } from 'react-router-config';

export const App = () => {
  return renderRoutes(CONFIG_ROUTES);
};
