import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <p>Home Screen</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { }
}

export default withRouter(connect(mapStateToProps)(HomeScreen));