import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import SidebarRouter from './components/SidebarRouter';
import MainRouter from './components/MainRouter';

import HomeScreen from './modules/Home/screens/HomeScreen';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet title='Irsi Services' />
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route render={
            () => (
              <div style={{ display: 'flex' }}>
                <SidebarRouter />
                <div style={{ flexGrow: 1 }}>
                  <MainRouter />
                </div>
              </div>
            )} />
        </Switch >
      </React.Fragment>
    );
  }
}

export default App;
