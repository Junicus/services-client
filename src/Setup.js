import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './redux/configureStore';
import App from './App';

import { AuthProvider } from './modules/Auth/components/AuthProvider/AuthProvider';

const history = createHistory();
const store = configureStore(history);

class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthProvider>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </AuthProvider>
      </Provider>
    );
  }
}

export default Setup;
