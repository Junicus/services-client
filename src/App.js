import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import PrivateRoute from './modules/Auth/components/PrivateRoute';

import HomeScreen from './modules/Home/screens/HomeScreen';
import SpeedOfServiceScreen from './modules/SpeedOfService/screens/SpeedOfServiceScreen';
import LoginScreen from './modules/Auth/screens/LoginScreen';

class App extends Component {
  render() {
    return (
      <div>
        <div><Link to='/'>Home</Link><Link to='/speedofservice'>Speed of Service</Link></div>
        <Route exact path='/' component={HomeScreen} />
        <PrivateRoute exact path='/speedofservice' component={SpeedOfServiceScreen} />
        <Route exact path='/login' component={LoginScreen} />
      </div>
    );
  }
}

export default App;
