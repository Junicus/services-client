import {
  FETCH_DAILYSUMMARIES,
  FETCH_DAILYSUMMARIES_SUCCESS,
  FETCH_DAILYSUMMARIES_FAILURE,
  FETCH_DAILYAVERAGETIMES,
  FETCH_DAILYAVERAGETIMES_SUCCESS,
  FETCH_DAILYAVERAGETIMES_FAILURE
} from './actionTypes';
import { acquireToken } from '../Auth/actions';

const BASE_API = 'http://localhost:3001/api/speedOfService';

export const getDailySummary = (date) => {
  return (dispatch) => {
    return acquireToken('speedOfService')(dispatch)
      .then(action => {
        const { token } = action.payload;
        dispatch(fetchDialySummaries());
        fetch(`${BASE_API}/summaries?date=${date}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw {
                error: {
                  status: response.status,
                  description: response.statusText
                }
              };
            }
          })
          .then(json => dispatch(fetchDailySummariesSuccess(json)))
          .catch(err => {
            if (err.error) {
              return dispatch(fetchDailySummariesFailure(err));
            }
            return dispatch(fetchDailySummariesFailure({
              error: {
                status: 500,
                description: err.message
              }
            }))
          });
      });
  }
};

export const getDailyAverageTimes = (date) => {
  return (dispatch) => {
    return acquireToken('speedOfService')(dispatch)
      .then(
        action => {
          const { token } = action.payload;
          if (token) {
            dispatch(fetchDailyAverageTimes());
            fetch(`${BASE_API}/averages?date=${date}`, {
              method: 'GET', headers: {
                'Authorization': `Bearer ${token}`,
              }
            })
              .then(response => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw {
                    error: {
                      status: response.status,
                      description: response.statusText
                    }
                  };
                }
              })
              .then(json => dispatch(fetchDailyAverageTimesSuccess(json)))
              .catch(err => {
                if (err.error) {
                  return dispatch(fetchDailyAverageTimesFailure(err));
                }
                return dispatch(fetchDailyAverageTimesFailure({
                  error: {
                    status: 500,
                    description: err.message
                  }
                }));
              });
          }
        });
  }
};

export const getDailySummaryAndAverageTimes = (date) => {
  return dispatch => {
    dispatch(fetchDialySummaries());
    dispatch(fetchDailyAverageTimes());
    return acquireToken('speedOfService')(dispatch)
      .then(action => {
        const { token } = action.payload;

        fetch(`${BASE_API}/summaries?date=${date}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw {
                error: {
                  status: response.status,
                  description: response.statusText
                }
              };
            }
          })
          .then(json => dispatch(fetchDailySummariesSuccess(json)))
          .catch(err => {
            if (err.error) {
              return dispatch(fetchDailySummariesFailure(err));
            }
            return dispatch(fetchDailySummariesFailure({
              error: {
                status: 500,
                description: err.message
              }
            }))
          });

        fetch(`${BASE_API}/averages?date=${date}`, {
          method: 'GET', headers: {
            'Authorization': `Bearer ${token}`,
          }
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw {
                error: {
                  status: response.status,
                  description: response.statusText
                }
              };
            }
          })
          .then(json => dispatch(fetchDailyAverageTimesSuccess(json)))
          .catch(err => {
            if (err.error) {
              return dispatch(fetchDailyAverageTimesFailure(err));
            }
            return dispatch(fetchDailyAverageTimesFailure({
              error: {
                status: 500,
                description: err.message
              }
            }));
          });
      });
  }
}

const fetchDialySummaries = () => ({
  type: FETCH_DAILYSUMMARIES
});

const fetchDailySummariesSuccess = (payload) => ({
  type: FETCH_DAILYSUMMARIES_SUCCESS,
  payload
});

const fetchDailySummariesFailure = (payload) => ({
  type: FETCH_DAILYSUMMARIES_FAILURE,
  payload
});

const fetchDailyAverageTimes = () => ({
  type: FETCH_DAILYAVERAGETIMES
});

const fetchDailyAverageTimesSuccess = (payload) => ({
  type: FETCH_DAILYAVERAGETIMES_SUCCESS,
  payload
});

const fetchDailyAverageTimesFailure = (payload) => ({
  type: FETCH_DAILYAVERAGETIMES_FAILURE,
  payload
});