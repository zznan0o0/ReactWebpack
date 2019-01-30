import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Bundle, {createComponent} from './Bundle';

import Home from 'bundle-loader?lazy&name=Home!Pages/Home/Home.jsx';
import Page404 from 'bundle-loader?lazy&name=Page404!Pages/Page404/Page404.jsx';

const Routes = (
  <Switch>
    <Route exact path="/" component={createComponent(Home)} />
    <Route component={createComponent(Page404)} />
  </Switch>
);

export default Routes;