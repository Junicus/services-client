import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SpeedOfServiceMenu = () => {
  return (
    <div>
      <p>Speed of Service</p>
      <Nav vertical>
        <NavItem><Link to='/speedofservice'>Dashboard</Link></NavItem>
        <NavItem><Link to='/speedofservice/reports'>Reports</Link></NavItem>
      </Nav>
    </div>
  );
}

export default SpeedOfServiceMenu;