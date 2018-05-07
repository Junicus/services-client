import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import SidebarSection from '../../../../components/SidebarSection';

const SpeedOfServiceMenu = () => {
  const links = [{
    to: '/speedofservice',
    title: 'Dashboard'
  }, {
    to: '/speedofservice/reports',
    title: 'Reports'
  }];

  return (
    <SidebarSection title='Speed of Service' links={links} />
  );
}

export default SpeedOfServiceMenu;