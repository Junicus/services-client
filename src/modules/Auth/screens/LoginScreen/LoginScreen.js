import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';

class LoginScreen extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {
          context => {
            if (context.isAuthenticated()) {
              const { state } = this.props.location;
              return (<Redirect to={state.from.pathname} />)
            } else {
              context.login();
            }
          }
        }
      </AuthContext.Consumer>
    )
  }
}

export default LoginScreen;