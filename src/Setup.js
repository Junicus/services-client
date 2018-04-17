import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './redux/configureStore';
import App from './App';

import AuthProviderAdal from './modules/Auth/components/AuthProviderAdal/AuthProviderAdal';

const history = createHistory();
const store = configureStore(history);

class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthProviderAdal>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </AuthProviderAdal>
      </Provider>
    );
  }
}

export default Setup;
