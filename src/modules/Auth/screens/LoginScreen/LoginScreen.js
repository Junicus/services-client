import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import AuthApi from '../../utils/AuthApi';
import { login } from '../../actions';

class LoginScreen extends Component {
  handleLoginClick = () => {
    this.props.login();
  }

  render() {
    if (this.props.isAuthenticated()) {
      const { state } = this.props.location;
      return (<Redirect to={state.from.pathname} />);
    } else {
      return (<Button onClick={this.handleLoginClick}>Login</Button>);
    }
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  return {
    auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isAuthenticated: () => AuthApi.isAuthenticated(),
    login: () => dispatch(login())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);