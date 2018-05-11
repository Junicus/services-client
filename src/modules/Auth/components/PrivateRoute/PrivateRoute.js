import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = (props) => {
  const { user } = props;
  if (user) {
    return <Route {...props} />
  } else {
    return <Redirect to={{ pathname: '/signIn', state: { from: props.location.pathname } }} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(PrivateRoute);