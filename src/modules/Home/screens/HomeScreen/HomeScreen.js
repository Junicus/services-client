import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getServiceLinks } from '../../utils/getServiceLinks';

import ServicesSwitchboard from '../../components/ServicesSwitchboard';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <ServicesSwitchboard services={getServiceLinks()} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

export default withRouter(connect(mapStateToProps)(HomeScreen));