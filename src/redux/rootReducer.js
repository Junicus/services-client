import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from '../modules/auth/reducers';
import { ui } from '../modules/ui/reducers';
// import speedOfService from '../modules/speedOfService/reducers';

const rootReducer = combineReducers({
  auth,
  ui,
  // speedOfService,
  router: routerReducer
});

export default rootReducer;