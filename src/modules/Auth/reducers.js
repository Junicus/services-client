import {
  LOGIN_START,
  ON_ACQUIRE_TOKEN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  ACQUIRE_TOKEN_START,
  ACQUIRE_TOKEN_SUCCESS,
  ACQUIRE_TOKEN_FAILED,
} from './actionTypes';

const initialState = {
  isLoggingIn: false,
  isAcquiringToken: false,
  user: null,
  access_tokens: {},
  loginError: null,
  acquireTokenError: null,
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        user: null,
        loginError: null
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        user: action.payload,
        loginError: null,
      }
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggingIn: false,
        user: null,
        loginError: action.payload.error
      }
    case ACQUIRE_TOKEN_START:
      return {
        ...state,
        isAcquiringToken: true,
        access_tokens: {
          ...state.access_tokens,
          [action.payload.endpoint]: null
        },
        acquireTokenError: null
      }
    case ACQUIRE_TOKEN_SUCCESS:
      return {
        ...state,
        isAcquiringToken: false,
        access_tokens: {
          ...state.access_tokens,
          [action.payload.endpoint]: action.payload.token
        },
        acquireTokenError: null,
      }
    case ACQUIRE_TOKEN_FAILED:
      return {
        ...state,
        isAcquiringToken: false,
        access_tokens: {
          ...state.access_tokens,
          [action.payload.endpoint]: null
        },
        acquireTokenError: action.payload.error
      }
    case ON_ACQUIRE_TOKEN:
      return {
        ...state,
        access_tokens: {
          ...state.access_tokens,
          [action.payload.endpoint]: action.payload.token
        }
      }
    default:
      return state;
  }
}