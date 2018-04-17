import {
  FETCH_DAILYSUMMARIES,
  FETCH_DAILYSUMMARIES_SUCCESS,
  FETCH_DAILYSUMMARIES_FAILURE,
  FETCH_DAILYAVERAGETIMES,
  FETCH_DAILYAVERAGETIMES_SUCCESS,
  FETCH_DAILYAVERAGETIMES_FAILURE
} from './actionTypes';

const BASE_API = 'http://localhost:3001/api/speedOfService';

export const getDailySummary = (date) => {
  return (dispatch, getState) => {
    const access_token = getState().auth.access_tokens.speedOfService;
    dispatch(fetchDialySummaries());
    fetch(`${BASE_API}/summaries?date=${date}`, {
      method: 'GET', headers: {
        'Authorization': `Bearer ${access_token}`,
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
  }
};

export const getDailyAverageTimes = (date) => {
  return (dispatch, getState) => {
    const access_token = getState().auth.access_tokens.speedOfService;
    dispatch(fetchDailyAverageTimes());
    fetch(`${BASE_API}/averages?date=${date}`, {
      method: 'GET', headers: {
        'Authorization': `Bearer ${access_token}`,
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
};

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