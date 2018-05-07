import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './redux/configureStore';
import App from './App';
import { ThemeProvider } from 'styled-components';

const history = createHistory();
const store = configureStore(history);

const theme = {
  primary: 'red',
};

class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Setup;
