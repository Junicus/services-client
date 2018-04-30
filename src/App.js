import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './modules/Auth/components/PrivateRoute';
import SidebarRouter from './components/SidebarRouter';
import MainRouter from './components/MainRouter';

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <SidebarRouter />
        <div style={{ flexGrow: 1 }}>
          <MainRouter />
        </div>
      </div>
    );
  }
}

export default App;
