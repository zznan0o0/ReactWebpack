import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=Home!Pages/Home/Home.jsx';


const Loading = function () {
  return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading />
    }
  </Bundle>
);

const Routes = (
  <Switch>
    <Route exact path="/" component={createComponent(Home)} />
    <Route component={createComponent(Page404)} />
  </Switch>
);

export default Routes;