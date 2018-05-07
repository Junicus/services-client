import { combineReducers } from 'redux';
import {
  SET_BUSINESSDATE_SELECTION,
  FETCH_DASHBOARD_SUMMARIES,
  FETCH_DASHBOARD_SUMMARIES_SUCCESS,
  FETCH_DASHBOARD_SUMMARIES_FAILURE,
  FETCH_DASHBOARD_AVERAGES,
  FETCH_DASHBOARD_AVERAGES_SUCCESS,
  FETCH_DASHBOARD_AVERAGES_FAILURE
} from "./actionTypes";

const initialState = {
}

const dashInitialState = {
  businessDate: null,
  summaries: {
    isLoading: false,
    keys: {},
    data: [],
    error: null
  },
  averages: {
    isLoading: false,
    data: [],
    error: null
  }
}

const dashboard = (state = dashInitialState, action) => {
  switch (action.type) {
    case SET_BUSINESSDATE_SELECTION:
      return {
        ...state,
        businessDate: action.payload
      }
    case FETCH_DASHBOARD_SUMMARIES:
      return {
        ...state,
        summaries: {
          ...state.summaries,
          isLoading: true,
          data: [],
          keys: {},
          error: null
        }
      }
    case FETCH_DASHBOARD_SUMMARIES_SUCCESS:
      {
        const { success, data } = action.payload;
        return {
          ...state,
          summaries: {
            ...state.summaries,
            isLoading: false,
            data: success ? data.records : [],
            keys: success ? data.keys : {},
            error: success ? null : data
          }
        }
      }
    case FETCH_DASHBOARD_SUMMARIES_FAILURE:
      return {
        ...state,
        summaries: {
          ...state.summaries,
          isLoading: false,
          data: [],
          keys: {},
          error: action.payload.error
        }
      }
    case FETCH_DASHBOARD_AVERAGES:
      return {
        ...state,
        averages: {
          ...state.averages,
          isLoading: true,
          data: [],
          error: null
        }
      }
    case FETCH_DASHBOARD_AVERAGES_SUCCESS:
      {
        const { success, data } = action.payload;
        return {
          ...state,
          averages: {
            ...state.averages,
            isLoading: false,
            data: success ? data : [],
            error: success ? null : data
          }
        }
      }
    case FETCH_DASHBOARD_AVERAGES_FAILURE:
      return {
        ...state,
        averages: {
          ...state.averages,
          isLoading: false,
          data: [],
          error: action.payload.error
        }
      }
    default:
      return state;
  }
}

const speedOfService = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({ speedOfService, dashboard });