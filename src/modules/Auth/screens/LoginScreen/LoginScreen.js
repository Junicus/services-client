import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContextAdal } from '../../components/AuthProviderAdal/AuthProviderAdal';

class LoginScreen extends Component {
  render() {
    return (
      <AuthContextAdal.Consumer>
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
      </AuthContextAdal.Consumer>
    )
  }
}

export default LoginScreen;