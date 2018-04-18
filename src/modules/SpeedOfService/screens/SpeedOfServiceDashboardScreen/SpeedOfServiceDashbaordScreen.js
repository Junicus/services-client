import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SummariesTable from '../../components/SummariesTable';
import AveragesTable from '../../components/AveragesTable';
import ScreenHeader from '../../../../components/ScreenHeader';

import { getDailySummaryAndAverageTimes } from '../../actions';
import { toggleSidebar } from '../../../UI/actions';

class SpeedOfServiceDashboardScreen extends Component {
  static propTypes = {
    summaries: PropTypes.object,
    averages: PropTypes.object,
    getDailySummaryAndAverageTimes: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getDailySummaryAndAverageTimes(Date.now());
  }

  render() {
    const { summaries, averages } = this.props;
    return (
      <div>
        <ScreenHeader title='Speed of Service' />
        <div>
          <section>
            <header><h2>Summaries</h2></header>
            <SummariesTable {...summaries} />
          </section>
          <section>
            <header><h2>Averages</h2></header>
            <AveragesTable {...averages} />
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { speedOfService, auth } = state;
  return {
    access_token: auth.access_tokens.speedOfService,
    summaries: speedOfService.summaries,
    averages: speedOfService.averages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDailySummaryAndAverageTimes: (date) => { dispatch(getDailySummaryAndAverageTimes(date)); },
    toggleSidebar: () => { dispatch(toggleSidebar()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedOfServiceDashboardScreen);