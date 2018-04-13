import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ServiceLink from '../ServiceLink';

class ServicesSwitchboard extends Component {
  static propTypes = {
    services: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  renderLinks = () => {
    return this.props.services.map(service => {
      return <ServiceLink
        key={service.pathname}
        to={service.pathname}
        title={service.title}
        icon={service.icon}
        imageUrl={service.imageUrl}
      />
    })
  }

  render() {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {
          this.renderLinks()
        }
      </div>
    );
  }
}

export default ServicesSwitchboard;