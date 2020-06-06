import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './header/header';
import { RouteConfigModel } from './models/route-config.model';

import { routes } from './routing/app-routing.config';
import RouteWithSubRoutes from './routing/route-with-subroutes';

export default function App() {
  return (
    <Router>
      <Header />

      <Switch>
        {
          routes
          .map(
            (route: RouteConfigModel, index: number) =>
              <RouteWithSubRoutes key={index} {...route} />
          )
        }
      </Switch>
    </Router>
  );
}
