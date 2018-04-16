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
        <React.Fragment>
          <p>{module.title}</p>
          <Nav vertical>
            {
              module.links.map(link => (
                <NavItem key={link.to}>
                  <Link to={link.to}>{link.title}</Link>
                </NavItem>
              ))
            }
          </Nav>
        </React.Fragment>
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
        <React.Fragment>
          <p>Modules</p>
          <Nav vertical>
            {renderedLinks}
          </Nav>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }

  render() {
    const { ui, links } = this.props;
    if (ui.showSidebar) {
      return (
        <div style={{ width: 200 }}>
          <Nav vertical>
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