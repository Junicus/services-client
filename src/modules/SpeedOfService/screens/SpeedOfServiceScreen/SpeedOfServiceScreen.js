import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import SpeedOfServiceDashboardScreen from '../SpeedOfServiceDashboardScreen';
import SpeedOfServiceReportsScreen from '../SpeedOfServiceReportsScreen';
import { showSidebar, setModuleInfo } from '../../../UI/actions';

class SpeedOfServiceScreen extends Component {
  static propTypes = {
    setModuleInfo: PropTypes.func.isRequired
  }
  componentDidMount = () => {
    this.props.setModuleInfo({
      title: 'Speed of Service',
      links: [
        { to: '/speedofservice', title: 'Dashboard' },
        { to: '/speedofservice/reports', title: 'Reports' }
      ]
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/speedofservice' component={SpeedOfServiceDashboardScreen} />
        <Route exact path='/speedofservice/reports' component={SpeedOfServiceReportsScreen} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  dispatch(showSidebar());
  return {
    setModuleInfo: (payload) => dispatch(setModuleInfo(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedOfServiceScreen);