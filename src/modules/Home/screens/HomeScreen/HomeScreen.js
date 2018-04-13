import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getServiceRoutes } from '../../../../config/router/routes';

import ServicesSwitchboard from '../../components/ServicesSwitchboard';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <ServicesSwitchboard services={getServiceRoutes()} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

export default withRouter(connect(mapStateToProps)(HomeScreen));