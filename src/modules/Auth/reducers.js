import {
  ON_ACQUIRE_TOKEN
} from './actionTypes';

const initialState = {
  access_tokens: {},
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
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