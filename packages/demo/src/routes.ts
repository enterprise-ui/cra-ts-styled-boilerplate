import { IRoute } from 'cra-ts-styled-boilerplate-core';

import Homepage from './pages/Homepage';
import NoMatchPage from './pages/NoMatchPage';

export const ROUTES = {
    APP: {
        FULL_PATH: '/',
    },
};

export const CONFIG_ROUTES: IRoute[] = [
    {
        component: Homepage,
        path: ROUTES.APP.FULL_PATH,
        exact: true,
    },
    {
        component: NoMatchPage,
        path: '*',
    },
];
