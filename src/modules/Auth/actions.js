import { AUTH_SUCESS, AUTH_FAILURE } from './actionTypes';

export const authSuccess = () => ({
  type: AUTH_SUCESS
});

export const authFailure = () => ({
  type: AUTH_FAILURE
});