import {
  MSAL_SIGNIN_PENDING,
  MSAL_SIGNIN_SUCCESS,
  MSAL_SIGNIN_FAILURE,
  MSAL_ACQUIRE_TOKEN_PENDING,
  MSAL_ACQUIRE_TOKEN_SUCCESS,
  MSAL_ACQUIRE_TOKEN_FAILURE,
  MSAL_SIGNOUT
} from './actionTypes';
import authService from './service';

const setSignInPending = () => ({
  type: MSAL_SIGNIN_PENDING
});

const setSignInSuccess = user => ({
  type: MSAL_SIGNIN_SUCCESS,
  payload: { user }
});

const setSignInFailure = error => ({
  type: MSAL_SIGNIN_FAILURE,
  payload: { error }
});

export const signIn = () => async dispatch => {
  dispatch(setSignInPending());
  try {
    const user = await authService.signIn();
    dispatch(setSignInSuccess(user));
  } catch (error) {
    dispatch(setSignInFailure(error));
  }
}

const setAcquireScopeTokenPending = scope => ({
  type: MSAL_ACQUIRE_TOKEN_PENDING,
  payload: { scope }
});

const setAcquireScopeTokenSuccess = (scope, token) => ({
  type: MSAL_ACQUIRE_TOKEN_SUCCESS,
  payload: { scope, token }
});

const setAcquireScopeTokenFailure = (scope, error) => ({
  type: MSAL_ACQUIRE_TOKEN_FAILURE,
  payload: { scope, error }
});

export const getAcquireScopeToken = scope => async dispatch => {
  dispatch(setAcquireScopeTokenPending(scope));
  try {
    const token = await authService.acquireToken(scope);
    dispatch(setAcquireScopeTokenSuccess(scope, token));
  } catch (error) {
    dispatch(setAcquireScopeTokenFailure(scope, error));
  }
}

export const signOut = () => {
  authService.signOut();
  return {
    type: MSAL_SIGNOUT
  };
}