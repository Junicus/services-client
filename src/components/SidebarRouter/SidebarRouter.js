import React from 'react';
import { Route } from 'react-router-dom';

import { sidebarRoutes } from '../../config/routes';

import { StyledSidebar } from './styles';

const SidebarRouter = () => {
  const renderRoutes = () => {
    return sidebarRoutes.map(route => {
      return <Route key={route.path} {...route} />
    });
  }

  return (
    <StyledSidebar>
      {
        renderRoutes()
      }
    </StyledSidebar>
  );
}

export default SidebarRouter;