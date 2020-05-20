import React from 'react';

import { StaticRouterContext } from 'react-router';
import { Link, StaticRouter as Router } from 'react-router-dom';

export const renderBlank = (path: string, context: StaticRouterContext) => (
  <Router location={path} context={context}>
    <Link to="/pages">Pages</Link>
  </Router>
);
