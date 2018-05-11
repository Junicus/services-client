import {
  MSAL_SIGNIN_PENDING,
  MSAL_SIGNIN_SUCCESS,
  MSAL_SIGNIN_FAILURE,
  MSAL_ACQUIRE_TOKEN_PENDING,
  MSAL_ACQUIRE_TOKEN_SUCCESS,
  MSAL_ACQUIRE_TOKEN_FAILURE,
  MSAL_SIGNOUT
} from './actionTypes';

const authInitialState = {
  isSigningIn: false,
  isSigningInErr: false,
  user: null,
  tokens: {}
}

const auth = (state = authInitialState, action) => {
  switch (action.type) {
    case MSAL_SIGNIN_PENDING:
      return {
        ...state,
        isSigningIn: true,
        isSigningInErr: false,
      }
    case MSAL_SIGNIN_SUCCESS:
      return {
        ...state,
        isSigningIn: false,
        isSigningInErr: false,
        user: action.payload.user
      }
    case MSAL_SIGNIN_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        isSigningInErr: true,
        user: null
      }
    case MSAL_ACQUIRE_TOKEN_PENDING:
      return {
        ...state,
        tokens: {
          ...state.tokens,
          [action.payload.scope]: { loading: true, token: null }
        }
      }
    case MSAL_ACQUIRE_TOKEN_SUCCESS:
      return {
        ...state,
        tokens: {
          ...state.tokens,
          [action.payload.scope]: { loading: false, token: action.payload.token }
        }
      }
    case MSAL_ACQUIRE_TOKEN_FAILURE:
      return {
        ...state,
        tokens: {
          ...state.tokens,
          [action.payload.scope]: { loading: false, error: action.payload.error }
        }
      }
    case MSAL_SIGNOUT:
      return {
        ...state,
        user: null,
        tokens: {}
      }
    default:
      return state;
  }
}

export default auth;