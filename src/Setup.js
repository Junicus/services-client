import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './redux/configureStore';
import App from './App';

const history = createHistory();
const store = configureStore(history);

class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <App />
          </React.Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Setup;
