import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
  renderModuleSection = () => {
    const { module } = this.props.links;
    if (module) {
      return (
        <div style={{ marginTop: 10, margin: 0 }} >
          <p style={{ padding: 5, margin: 0, backgroundColor: 'SteelBlue', color: 'white' }}>{module.title}</p>
          <Nav style={{ padding: 5, backgroundColor: 'LightSteelBlue' }} vertical>
            {
              module.links.map(link => (
                <NavItem key={link.to}>
                  <Link to={link.to}>{link.title}</Link>
                </NavItem>
              ))
            }
          </Nav>
        </div>
      )
    } else {
      return null;
    }
  }

  renderModulesSection = () => {
    const { links, location } = this.props;
    const renderedLinks = links.modules
      .filter(module => !location.pathname.startsWith(module.to))
      .map(module => (
        <NavItem key={module.to}>
          <Link to={module.to}>{module.title}</Link>
        </NavItem>
      ));
    if (renderedLinks.length) {
      return (
        <div style={{ marginTop: 10, margin: 0 }} >
          <p style={{ padding: 5, margin: 0, backgroundColor: 'SteelBlue', color: 'white' }}>Modules</p>
          <Nav style={{ backgroundColor: 'LightSteelBlue' }} vertical>
            {renderedLinks}
          </Nav>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const { ui, links } = this.props;
    if (ui.showSidebar) {
      return (
        <div style={{ width: 200, margin: 15 }}>
          <Nav style={{ padding: 5 }} vertical>
            <NavItem>
              <Link to={links.home.to}>{links.home.title}</Link>
            </NavItem>
          </Nav>
          {
            this.renderModuleSection()
          }
          {
            this.renderModulesSection()
          }
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  const { ui, links } = state;
  return {
    ui,
    links
  }
}

export default withRouter(connect(mapStateToProps)(Sidebar));