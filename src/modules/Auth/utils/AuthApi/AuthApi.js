import * as AuthenticationContext from './Lib/adal';

class AuthApi {
  constructor() {
    this.endpoints = [
      { speedOfService: process.env.REACT_APP_SPEEDOFSERVICE_API_ID }
    ];
    this.options = {
      clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
      extraQueryParameters: 'nux=1&domain_hint=irsipr.com',
      redirectUri: 'http://localhost:3000/auth',
      disableRenewal: false,
      popUp: true,
      endpoints: this.endpoints,
      cacheLocation: 'localStorage',
    }
    this.authContext = new AuthenticationContext(this.options);
  }

  login = () => {
    return new Promise((resolve, reject) => {
      this.authContext.callback = (message, token, error) => {
        if (token) {
          const user = this.authContext.getCachedUser();
          resolve(user);
        } else {
          reject({ error: { error, message } });
        }
      };
      this.authContext.login();
      this.authContext.callback = null;
    });
  }

  logout = () => {
    return Promise((resolve, reject) => {
      this.authContext.logOut();
      resolve();
    });
  }

  isAuthenticated = () => {
    const user = this.authContext.getCachedUser();
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  _getEndpointId = (endpoint) => {
    return this.endpoints.find(e => e.hasOwnProperty(endpoint))[endpoint];
  }

  acquireToken = (endpoint) => {
    const endpointId = this._getEndpointId(endpoint);
    return new Promise((resolve, reject) => {
      this.authContext.acquireToken(endpointId, (message, token, error) => {
        if (token) {
          resolve(token);
        } else {
          this.authContext.acquireTokenPopup(endpointId, null, null, (message, token, error) => {
            if (token) {
              resolve(token);
            } else {
              reject({ error: { error, message } });
            }
          });
        }
      });
    });
  }
}

export let authApi = new AuthApi();