import { IRoute } from 'cra-ts-styled-boilerplate-core';

import Homepage from './pages/Homepage';

export const ROUTES = {
    APP: {
        FULL_PATH: '/',

        PAGES: {
            FULL_PATH: '/pages',
        }
    },
};

export const PATHS = [ROUTES.APP.FULL_PATH, ROUTES.APP.PAGES.FULL_PATH];

export const CONFIG_ROUTES: IRoute[] = [
    {
        component: Homepage,
        path: ROUTES.APP.PAGES.FULL_PATH,
        exact: true,
    },
];
