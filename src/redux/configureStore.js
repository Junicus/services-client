import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './rootReducer';

const configureStore = (history) => {
  const middleware = [
    thunk,
    routerMiddleware(history)
  ];
  const enhancers = [];

  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  );

  return createStore(rootReducer, {}, composedEnhancers);
}

export default configureStore;