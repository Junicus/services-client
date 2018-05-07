import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import SpeedOfServiceDashboardScreen from '../SpeedOfServiceDashboardScreen';
import SpeedOfServiceReportsScreen from '../SpeedOfServiceReportsScreen';
import { showSidebar, setModuleInfo } from '../../../UI/actions';
import ContentWrapper from '../../../../components/ContentWrapper/ContentWrapper';

class SpeedOfServiceScreen extends Component {
  render() {
    return (
      <ContentWrapper>
        <Switch>
          <Route exact path='/speedofservice' component={SpeedOfServiceDashboardScreen} />
          <Route exact path='/speedofservice/reports' component={SpeedOfServiceReportsScreen} />
        </Switch>
      </ContentWrapper>
    );
  }
}

export default SpeedOfServiceScreen;