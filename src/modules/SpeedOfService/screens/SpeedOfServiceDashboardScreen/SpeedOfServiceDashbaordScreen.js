import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Input } from 'reactstrap';
import moment from 'moment';

import ScreenHeader from '../../../../components/ScreenHeader';

import { setDashboardBusinessDateSelection, getDailySummaryAndAverageTimes } from '../../actions';
import { toggleSidebar } from '../../../UI/actions';
import BusinessDateSelector from '../../components/BusinessDateSelector/BusinessDateSelector';
import AveragesDashboardSection from '../../components/AveragesDashboardSection';
import SummaryDashboardSection from '../../components/SummaryDashboardSection';

class SpeedOfServiceDashboardScreen extends Component {
  static propTypes = {
    businessDate: PropTypes.string,
    summaries: PropTypes.object,
    averages: PropTypes.object,
    setDashboardBusinessDateSelection: PropTypes.func.isRequired,
    getDailySummaryAndAverageTimes: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.setDashboardBusinessDateSelection(moment().format('YYYY-MM-DD'));
  }

  _handleBusinessDateChange = (e) => {
    this.props.setDashboardBusinessDateSelection(e.target.value);
  }

  render() {
    const { summaries, averages } = this.props;
    return (
      <React.Fragment>
        <ScreenHeader title='Speed of Service' />
        <BusinessDateSelector value={this.props.businessDate} onChange={this._handleBusinessDateChange} />
        <SummaryDashboardSection summaries={summaries} />
        <AveragesDashboardSection averages={averages} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { speedOfService, auth } = state;
  return {
    businessDate: speedOfService.dashboard.businessDate,
    access_token: auth.access_tokens.speedOfService,
    summaries: speedOfService.dashboard.summaries,
    averages: speedOfService.dashboard.averages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDashboardBusinessDateSelection: date => { dispatch(setDashboardBusinessDateSelection(date)); },
    getDailySummaryAndAverageTimes: (date) => { dispatch(getDailySummaryAndAverageTimes(date)); },
    toggleSidebar: () => { dispatch(toggleSidebar()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedOfServiceDashboardScreen);