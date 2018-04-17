import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContextAdal } from '../AuthProviderAdal/AuthProviderAdal';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthContextAdal.Consumer>
      {
        context => {
          return <Route {...rest} render={
            props => {
              return context.isAuthenticated() ?
                <Component {...props} /> :
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
          } />
        }
      }
    </AuthContextAdal.Consumer>
  );
}

export default PrivateRoute;