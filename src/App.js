import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './modules/Auth/components/PrivateRoute';

import { routes } from './config/router/routes';

import './index.css';

class App extends Component {
  renderRouters = () => {
    return routes.map(route => {
      return route.private ?
        <PrivateRoute key={route.pathname} exact path={route.pathname} component={route.component} /> :
        <Route key={route.pathname} exact path={route.pathname} component={route.component} />
    });
  }

  render() {
    return (
      <div>
        {
          this.renderRouters()
        }
      </div>
    );
  }
}

export default App;
