import * as AuthenticationContext from './Lib/adal';

class AuthApi {
  static get endpoints() {
    return {
      speedOfService: process.env.REACT_APP_SPEEDOFSERVICE_API_ID
    }
  }

  static get options() {
    return {
      clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
      extraQueryParameters: 'nux=1&domain_hint=irsipr.com',
      redirectUri: 'http://localhost:3000/auth',
      disableRenewal: false,
      popUp: true,
      endpoints: AuthApi.endpoints,
      cacheLocation: 'localStorage',
    }
  }

  static get authContext() {
    return new AuthenticationContext(AuthApi.options);
  }

  static login = () => {
    return new Promise((resolve, reject) => {
      AuthApi.authContext.callback = (message, token, error) => {
        if (token) {
          const user = AuthApi.authContext.getCachedUser();
          resolve(user);
        } else {
          reject({ error: { error, message } });
        }
      };
      AuthApi.authContext.login();
      AuthApi.authContext.callback = null;
    });
  }

  static logout = () => {
    return Promise((resolve, reject) => {
      AuthApi.authContext.logOut();
      resolve();
    });
  }

  static isAuthenticated = () => {
    const user = AuthApi.authContext.getCachedUser();
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  static acquireToken = (endpoint) => {
    console.log('at endpoint: ', endpoint);
    return new Promise((resolve, reject) => {
      AuthApi.authContext.acquireToken(AuthApi.endpoints[endpoint], (message, token, error) => {
        if (token) {
          resolve(token);
        } else {
          AuthApi.authContext.acquireTokenPopup(AuthApi.endpoints[endpoint], null, null, (message, token, error) => {
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

export default AuthApi;