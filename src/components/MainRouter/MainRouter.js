import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../../modules/Auth/components/PrivateRoute';
import { mainRoutes } from '../../config/routes';

const MainRouter = () => {
  const renderRoutes = () => {
    return mainRoutes.map(route => {
      return route.private ? <PrivateRoute key={route.path} {...route} /> :
        <Route key={route.path} {...route} />
    });
  }

  return (
    <Switch>
      {
        renderRoutes()
      }
    </Switch>
  );
}

export default MainRouter;