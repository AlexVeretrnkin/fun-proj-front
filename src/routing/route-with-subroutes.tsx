import React from 'react';
import { Route } from 'react-router-dom';

import { RouteConfigModel } from '../models/route-config.model';

export default function RouteWithSubRoutes(route: RouteConfigModel) {
  return (
    <Route
      path={route.path}
      render={(props: any) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
