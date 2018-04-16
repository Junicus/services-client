import {
  FETCH_DAILYSUMMARIES,
  FETCH_DAILYAVERAGETIMES,
  FETCH_DAILYSUMMARIES_FAILURE,
  FETCH_DAILYAVERAGETIMES_FAILURE
} from "./actionTypes";

const initialState = {
  summaries: {
    isLoading: false,
    data: [],
    error: null
  },
  averages: {
    isLoading: false,
    data: [],
    error: null
  }
}

export const speedOfService = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAILYSUMMARIES:
      return {
        ...state,
        summaries: {
          ...state.summaries,
          isLoading: true,
          error: null
        }
      };
    case FETCH_DAILYSUMMARIES_FAILURE:
      return {
        ...state,
        summaries: {
          ...state.summaries,
          isLoading: false,
          data: [],
          error: action.payload.error
        }
      }
    case FETCH_DAILYAVERAGETIMES:
      return {
        ...state,
        averages: {
          ...state.averages,
          isLoading: true,
          error: null
        }
      };
    case FETCH_DAILYAVERAGETIMES_FAILURE:
      return {
        ...state,
        averages: {
          ...state.averages,
          isLoading: false,
          error: action.payload.error
        }
      }
    default:
      return state;
  }
}
