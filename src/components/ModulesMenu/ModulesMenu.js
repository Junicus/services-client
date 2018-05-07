import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import SidebarSection from '../SidebarSection';

const moduleLinks = [{
  to: '/',
  title: 'Home'
}, {
  to: '/speedofservice',
  title: 'Speed of Service'
}];

class ModulesMenu extends Component {
  getModuleLinks = () => {
    return moduleLinks.filter(link => {
      return link.to === '/' ? true : !this.props.location.pathname.startsWith(link.to);
    });
  }

  render() {
    const links = this.getModuleLinks();

    if (links && links.length) {
      return (
        <SidebarSection title='Modules' links={links} />
      );
    } else {
      return null;
    }
  }
}

export default withRouter(ModulesMenu);