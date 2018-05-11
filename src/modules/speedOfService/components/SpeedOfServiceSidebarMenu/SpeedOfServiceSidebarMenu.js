import React from 'react';
import styled from 'styled-components';

import SidebarSection from '../../../ui/components/Sidebar/SidebarSection';

const SpeedOfServiceSidebarMenu = ({ links }) => {
  return (
    <SidebarSection title='Speed of Service'
      links={links} />
  );
}

export default SpeedOfServiceSidebarMenu;