import { authApi } from './utils/AuthApi';

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  ACQUIRE_TOKEN_START,
  ACQUIRE_TOKEN_SUCCESS,
  ACQUIRE_TOKEN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_START,
} from './actionTypes';

export const login = () => {
  return dispatch => {
    dispatch(loginStart());
    return authApi.login()
      .then(user => dispatch(loginSuccess(user)))
      .catch(error => dispatch(loginFailed(error)));
  }
}

export const loginStart = () => ({
  type: LOGIN_START
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload
});

export const logout = () => {
  return dispatch => {
    dispatch(logoutStart());
    authApi.logout()
      .then(() => dispatch(logoutSuccess()));
  }
}

export const logoutStart = () => ({
  type: LOGOUT_START
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const acquireToken = (endpoint) => {
  return dispatch => {
    dispatch(acquireTokenStart({ endpoint }));
    return authApi.acquireToken(endpoint)
      .then(token => dispatch(acquireTokenSuccess({ endpoint, token })))
      .catch(error => dispatch(acquireTokenFailed(error)));
  }
}

export const acquireTokenStart = (payload) => ({
  type: ACQUIRE_TOKEN_START,
  payload
});

export const acquireTokenSuccess = (payload) => ({
  type: ACQUIRE_TOKEN_SUCCESS,
  payload
});

export const acquireTokenFailed = (payload) => ({
  type: ACQUIRE_TOKEN_FAILED,
  payload
});