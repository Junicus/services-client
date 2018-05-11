import React from 'react';

import SpeedOfServiceSidebarMenu from '../../modules/speedOfService/components/SpeedOfServiceSidebarMenu';
import SpeedOfServiceScreen from '../../modules/speedOfService/screens/SpeedOfServiceScreen';
import SpeedOfServiceDashboardScreen from '../../modules/speedOfService/screens/SpeedOfServiceDashboardScreen';
import SpeedOfServiceReportsScreen from '../../modules/speedOfService/screens/SpeedOfServiceReportsScreen';

import links from '../links';

const routes = {
  sidebar: [
    {
      path: '/speedOfService',
      exact: false,
      render: () => <SpeedOfServiceSidebarMenu links={links.speedOfServiceLinks} />
    }
  ],
  content: [
    {
      path: '/speedOfService',
      component: SpeedOfServiceScreen,
      private: true
    }
  ],
  speedOfService: [
    {
      path: '/speedOfService/dashboard',
      exact: true,
      component: SpeedOfServiceDashboardScreen
    },
    {
      path: '/speedOfService/reports',
      exact: true,
      component: SpeedOfServiceReportsScreen
    }
  ]
};

export default routes;