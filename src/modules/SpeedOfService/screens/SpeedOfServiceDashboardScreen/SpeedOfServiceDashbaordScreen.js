import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Input } from 'reactstrap';
import moment from 'moment';

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

  state = {
    businessDate: moment().format('YYYY-MM-DD')
  }

  componentDidMount() {
    this.props.getDailySummaryAndAverageTimes(this.state.businessDate);
  }

  _handleBusinessDateChange = (e) => {
    this.setState({
      businessDate: e.target.value
    }, () => this.props.getDailySummaryAndAverageTimes(this.state.businessDate));
  }

  render() {
    const { summaries, averages } = this.props;
    return (
      <div>
        <ScreenHeader title='Speed of Service' />
        <div>
          <section>
            <Label for='businessDate'>Business Date:</Label>
            <Input type='date' id='businessDate' value={this.state.businessDate}
              onChange={this._handleBusinessDateChange} />
          </section>
          <section>
            <header>Summaries</header>
            <SummariesTable {...summaries} />
          </section>
          <section>
            <header>Averages</header>
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