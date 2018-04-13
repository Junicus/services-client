import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { auth } from '../modules/Auth/reducers';
import { speedOfService } from '../modules/SpeedOfService/reducers';

const rootReducer = combineReducers({
  auth,
  speedOfService,
  router: routerReducer
});

export default rootReducer;