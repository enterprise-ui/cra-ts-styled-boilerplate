import React from 'react';

import {HomePage} from 'cra-ts-styled-boilerplate-demo';
import {NoMatchPage} from 'cra-ts-styled-boilerplate-demo';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="*" component={NoMatchPage} />
    </Switch>
  );
};
