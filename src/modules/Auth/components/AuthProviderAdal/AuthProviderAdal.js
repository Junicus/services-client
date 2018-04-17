import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as AuthenticationContext from './Lib/adal';
import { onAcquireToken } from '../../actions';

export const AuthContextAdal = React.createContext();

class AuthProviderAdal extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }

    this.endpoints = {
      speedOfService: process.env.REACT_APP_SPEEDOFSERVICE_API_ID
    }

    this.adalConfig = {
      clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
      extraQueryParameters: 'nux=1&domain_hint=irsipr.com',
      redirectUri: 'http://localhost:3000/auth',
      disableRenewal: false,
      popUp: true,
      endpoints: this.endpoints,
      callback: this.callback,
      cacheLocation: 'localStorage',
    };

    this.authContext = new AuthenticationContext(this.adalConfig);
  }

  isAuthenticated = () => {
    let currUser = null;
    this.authContext.getUser((err, user) => {
      currUser = user;
    });
    if (currUser) {
      return true;
    } else {
      return false;
    }
  }

  callback = (msg, token, error) => {
    if (token) {
      this.handleToken(token);
    } else {
      console.log(`${error}: ${msg}`);
    }
  }

  handleToken = (token) => {
    const user = this.authContext.getCachedUser();
    this.setState({ user });
  }

  login = () => {
    this.authContext.login();
  }

  logout = () => {
    this.authContext.logOut();
  }

  acquireToken = (endpoint) => {
    this.authContext.acquireToken(this.endpoints[endpoint], (msg, token, error) => {
      if (token) {
        this.props.dispatch(onAcquireToken({
          endpoint,
          token
        }));
      } else {
        this.authContext.acquireTokenPopup(this.endpoints[endpoint], '', '', (msg, token, error) => {
          if (token) {
            this.props.dispatch(onAcquireToken({
              endpoint,
              token
            }));
          } else {
            console.log(`${error}: ${msg}`);
          }
        });
      }
    });
  }

  consoleLogger = (level, message, containsPii) => {
    switch (level) {
      case 0:
        console.error(message);
        break;
      case 1:
        console.warn(message);
        break;
      default:
        console.log(message);
        break;
    }
  }

  render() {
    return (
      <AuthContextAdal.Provider value={{
        user: this.state.user,
        endpoints: this.endpoints,
        isAuthenticated: this.isAuthenticated,
        login: this.login,
        logout: this.logout,
        acquireToken: this.acquireToken
      }}>
        {this.props.children}
      </AuthContextAdal.Provider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

export default connect(() => ({}), mapDispatchToProps)(AuthProviderAdal);