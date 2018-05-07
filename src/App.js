import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import SidebarRouter from './components/SidebarRouter';
import MainRouter from './components/MainRouter';

import HomeScreen from './modules/Home/screens/HomeScreen';
import { TwoColumnLayout, TwoColumnContent } from './styles';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet title='IRSI Services' />
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route render={
            () => (
              <TwoColumnLayout>
                <SidebarRouter />
                <TwoColumnContent>
                  <MainRouter />
                </TwoColumnContent>
              </TwoColumnLayout>
            )} />
        </Switch >
      </React.Fragment>
    );
  }
}

export default App;
