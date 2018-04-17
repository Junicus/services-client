import React, { Component } from 'react';
import { UserAgentApplication, Logger } from 'msal';

const applicationConfig = {
  clientID: process.env.REACT_APP_AZURE_CLIENT_ID,
  authority: process.env.REACT_APP_AUTHORITY,
  graphScopes: [
    process.env.REACT_APP_AZURE_CLIENT_ID,
    
  ]
}

export const AuthContextMsal = React.createContext();

export class AuthProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }

    this.userAgentApplication = new UserAgentApplication(
      applicationConfig.clientID,
      applicationConfig.authority,
      this.authCallback,
      {
        postLogoutRedirectUri: '/logout',
        logger: new Logger(this.consoleLogger),
        redirectUri: 'http://localhost:3000/auth'
      }
    );
  }

  authCallback = (errorDesc, token, error, tokenType) => {
    if (token) {
      this.handleToken(token);
    } else {
      console.warn(error + ':' + errorDesc);
    }
  }

  handleToken = (token) => {
    const user = this.userAgentApplication.getUser();
    this.setState(user);
  }

  isAuthenticated = () => {
    let user = this.userAgentApplication.getUser();
    if (!user) {
      return false;
    } else {
      return true;
    }
  }

  loginPopup = () => {
    const self = this;
    this.userAgentApplication.loginPopup()
      .then(idToken => {
        self.userAgentApplication.acquireTokenSilent(applicationConfig.graphScopes)
          .then(accessToken => {
            self.handleToken(accessToken);
          }, error => {
            self.userAgentApplication.acquireTokenPopup(applicationConfig.graphScopes)
              .then(accessToken => {
                self.handleToken(accessToken);
              }, error => {
                console.error(error);
              })
          });
      }, error => {
        console.error(error);
      })
  }

  logout = () => {
    this.userAgentApplication.logout();
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
      <AuthContext.Provider value={{
        user: this.state.user,
        isAuthenticated: this.isAuthenticated,
        login: this.loginPopup,
        logout: this.logout
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}