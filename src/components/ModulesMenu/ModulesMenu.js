import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';

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

  renderModuleLinks = () => {
    const links = this.getModuleLinks();
    return links.map(link =>
      <NavItem key={link.to}>
        <Link to={link.to}>{link.title}</Link>
      </NavItem>
    );
  }

  render() {
    const links = this.getModuleLinks();

    if (links && links.length) {
      return (
        <div>
          <p>Modules</p>
          <Nav>
            {
              this.renderModuleLinks()
            }
          </Nav>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(ModulesMenu);