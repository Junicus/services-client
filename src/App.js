import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PrivateRoute from './modules/auth/components/PrivateRoute';
import SwitchboardScreen from './modules/home/screens/SwitchboardScreen';
import SignInScreen from './modules/auth/screens/SignInScreen';
import ApplicationLayout from './modules/ui/components/ApplicationLayout';
import Sidebar from './modules/ui/components/Sidebar';
import ContentContainer from './modules/ui/components/ContentContainer';
import ModuleLinks from './modules/ui/components/Sidebar/ModuleLinks';
import links from './config/links';
import routes from './config/routes';

class App extends Component {
  _renderSidebarRoutes = (r) => {
    return r.map(route => {
      return <Route key={`sidebar${route.path}`} {...route} />
    });
  }

  _renderContentRoutes = (r) => {
    return r.map(route => {
      return route.private ? <PrivateRoute key={`content${route.path}`} {...route} />
        : <Route key={`content${route.path}`} {...route} />
    });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title='IRSI Services' />
        <Switch>
          <Route path='/' exact render={() =>
            <SwitchboardScreen
              message='Welcome to IRSI.Services'
              links={links.switchboardLinks} />
          } />
          <Route path='/signIn' exact render={routeProps =>
            <SignInScreen {...routeProps} />
          } />
          <Route render={() => (
            <ApplicationLayout>
              <Sidebar>
                <Route render={() => <ModuleLinks links={links.moduleLinks} />} />
                {
                  this._renderSidebarRoutes(routes.sidebar)
                }
              </Sidebar>
              <ContentContainer>
                <Switch>
                  {
                    this._renderContentRoutes(routes.content)
                  }
                </Switch>
              </ContentContainer>
            </ApplicationLayout>
          )} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
