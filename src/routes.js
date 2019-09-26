import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import DisplayMap from './pages/DisplayMap';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/displaymap" component={DisplayMap} />
      </Switch>
    </BrowserRouter>
  );
}
