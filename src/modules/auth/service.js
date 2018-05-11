import * as msal from 'msal';

const PROD_REDIRECT_URI = process.env.PROD_REDIRECT_URI || 'localhost';

class AuthService {
  constructor() {
    const redirectUri = (window.location.hostname !== '127.0.0.1' && window.location.hostname !== 'localhost') ?
      PROD_REDIRECT_URI : window.location.origin;

    this.applicationConfig = {
      clientID: process.env.REACT_APP_AZURE_CLIENT_ID,
      graphScopes: ['user.read', process.env.REACT_APP_SERVICES_SCOPE]
    }

    const logger = new msal.Logger(this._loggerCallback, { level: msal.LogLevel.Verbose, piiLoggingEnabled: true });

    this.app = new msal.UserAgentApplication(
      this.applicationConfig.clientID,
      '',
      () => { },
      {
        logger,
        redirectUri
      }
    );
  }

  _loggerCallback = (logLevel, message, piiLoggingEnabled) => {
    console.log(message);
  }

  signIn = async () => {
    try {
      const user = await this.app.loginPopup(this.applicationConfig.graphScopes);
      return user ? user : null;
    } catch (error) {
      throw new Error({ error });
    }
  }

  signOut = () => {
    this.app.logout();
  }

  acquireToken = async scope => {
    try {
      return await this.app.acquireTokenSilent(scope);
    } catch (error) {
      try {
        return await this.app.acquireTokenPopup(scope);
      } catch (err) {
        console.log(err);
        throw new Error({ error: err });
      }
    }
  }
}

export default new AuthService();