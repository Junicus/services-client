import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from '../../../../config/routes';

const SpeedOfServiceScreen = () => {
  const renderRoutes = () => {
    return routes.speedOfService.map(route => {
      return <Route key={`speedOfService${route.path}`} {...route} />;
    });
  }

  return (
    <Switch>
      {
        renderRoutes()
      }
      <Redirect to='/speedOfService/dashboard' />
    </Switch>
  );
}

export default SpeedOfServiceScreen;