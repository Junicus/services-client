import React from 'react';
import { Route } from 'react-router-dom';

import { sidebarRoutes } from '../../config/routes';

const SidebarRouter = () => {
  const renderRoutes = () => {
    return sidebarRoutes.map(route => {
      return <Route key={route.path} {...route} />
    });
  }

  return (
    <div>
      {
        renderRoutes()
      }
    </div>
  );
}

export default SidebarRouter;