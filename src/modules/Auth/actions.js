import {
  ON_ACQUIRE_TOKEN
} from './actionTypes';

export const onAcquireToken = payload => ({
  type: ON_ACQUIRE_TOKEN,
  payload
});