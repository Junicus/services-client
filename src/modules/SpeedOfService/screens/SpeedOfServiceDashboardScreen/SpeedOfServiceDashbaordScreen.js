import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SummariesTable from '../../components/SummariesTable';
import AveragesTable from '../../components/AveragesTable';
import ScreenHeader from '../../../../components/ScreenHeader';

import { getDailySummary, getDailyAverageTimes } from '../../actions';
import { toggleSidebar } from '../../../UI/actions';

class SpeedOfServiceDashboardScreen extends Component {
  static propTypes = {
    summaries: PropTypes.object,
    averages: PropTypes.object,
    getDailySummary: PropTypes.func.isRequired,
    getDailyAverageTimes: PropTypes.func.isRequired
  }

  componentDidMount = async () => {
    this.props.getDailySummary(Date.now());
    this.props.getDailyAverageTimes(Date.now());
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
  const { speedOfService } = state;
  return {
    summaries: speedOfService.summaries,
    averages: speedOfService.averages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDailySummary: (date) => { dispatch(getDailySummary(date)); },
    getDailyAverageTimes: (date) => { dispatch(getDailyAverageTimes(date)); },
    toggleSidebar: () => { dispatch(toggleSidebar()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedOfServiceDashboardScreen);