import {
  FETCH_DAILYSUMMARIES,
  FETCH_DAILYSUMMARIES_SUCCESS,
  FETCH_DAILYSUMMARIES_FAILURE,
  FETCH_DAILYAVERAGETIMES,
  FETCH_DAILYAVERAGETIMES_SUCCESS,
  FETCH_DAILYAVERAGETIMES_FAILURE
} from './actionTypes';

const BASE_API = 'http://localhost:3001/api/speedofservice';

export const getDailySummary = (date) => {
  return dispatch => {
    dispatch(fetchDialySummaries());
    fetch(`${BASE_API}/summaries?date=${date}`)
      .then(response => {
        console.log(response);
        if (response.ok)
          return response.json();
        dispatch(fetchDailySummariesFailure({
          error: {
            status: response.status,
            description: response.statusText
          }
        }))
      })
      .then(json => dispatch(fetchDailySummariesSuccess(json)))
      .catch(err => {
        console.log(err);
        return dispatch(fetchDailySummariesFailure({
          error: {
            status: 500,
            description: err
          }
        }))
      });
  }
};

export const getDailyAverageTimes = (date) => {
  return dispatch => {
    dispatch(fetchDailyAverageTimes());
    fetch(`${BASE_API}/averages?date=${date}`)
      .then(response => {
        if (response.ok)
          return response.json();
        dispatch(fetchDailyAverageTimesFailure({
          error: {
            status: response.status,
            description: response.statusText
          }
        }))
      })
      .then(json => dispatch(fetchDailyAverageTimesSuccess(json)))
      .catch(err => {
        console.log(err);
        return dispatch(fetchDailyAverageTimesFailure({
          error: {
            status: 500,
            description: err
          }
        }))
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