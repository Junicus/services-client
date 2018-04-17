import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ServicesSwitchboard from '../../components/ServicesSwitchboard';
import { hideSidebar } from '../../../UI/actions';

class HomeScreen extends Component {
  static propTypes = {
    links: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <ServicesSwitchboard services={this.props.links.modules} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { links } = state;
  return { links }
}

const mapDispatchToProps = dispatch => {
  dispatch(hideSidebar());
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeScreen));