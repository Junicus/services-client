import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authApi } from '../../utils/AuthApi';

const PrivateRoute = ({ component: Component, ...props }) => {
  if (props.isAuthenticated()) {
    return (<Component {...props} />);
  } else {
    return (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />);
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
    isAuthenticated: () => authApi.isAuthenticated()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);