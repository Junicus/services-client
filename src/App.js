import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './modules/Auth/components/PrivateRoute';
import Sidebar from './components/Sidebar';

import { routes } from './config/router/routes';

class App extends Component {
  renderRouters = () => {
    return routes.map(route => {
      return route.private ?
        <PrivateRoute key={route.path} {...route} /> :
        <Route key={route.path} {...route} />
    });
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Switch>
          {
            this.renderRouters()
          }
        </Switch>
      </div>
    );
  }
}

export default App;
