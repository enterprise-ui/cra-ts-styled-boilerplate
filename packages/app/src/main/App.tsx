import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import NoMatchPage from '../pages/NoMatchPage';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="*" component={NoMatchPage} />
    </Switch>
  );
};

