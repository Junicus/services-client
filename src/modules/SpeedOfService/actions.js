import {
  FETCH_DAILYSUMMARIES,
  FETCH_DAILYSUMMARIES_SUCCESS,
  FETCH_DAILYSUMMARIES_FAILURE,
  FETCH_DAILYAVERAGETIMES,
  FETCH_DAILYAVERAGETIMES_SUCCESS,
  FETCH_DAILYAVERAGETIMES_FAILURE,
  SET_BUSINESSDATE_SELECTION,
  FETCH_DASHBOARD_SUMMARIES,
  FETCH_DASHBOARD_SUMMARIES_SUCCESS,
  FETCH_DASHBOARD_SUMMARIES_FAILURE,
  FETCH_DASHBOARD_AVERAGES,
  FETCH_DASHBOARD_AVERAGES_SUCCESS,
  FETCH_DASHBOARD_AVERAGES_FAILURE,
} from './actionTypes';
import { speedOfServiceApi } from './utils/speeOfServiceApi';

export const setDashboardBusinessDateSelection = date => dispatch => {
  dispatch({ type: SET_BUSINESSDATE_SELECTION, payload: date });
  dispatch(getDashboardSummaries(date));
  dispatch(getDashboardAverages(date));
}

export const getDashboardSummaries = date => dispatch => {
  dispatch({ type: FETCH_DASHBOARD_SUMMARIES });
  return speedOfServiceApi.getSummariesByDate(date)
    .then(
      json => dispatch({ type: FETCH_DASHBOARD_SUMMARIES_SUCCESS, payload: json }),
      error => dispatch({ type: FETCH_DASHBOARD_SUMMARIES_FAILURE, payload: error })
    );
}

export const getDashboardAverages = date => dispatch => {
  dispatch({ type: FETCH_DASHBOARD_AVERAGES });
  return speedOfServiceApi.getAverageTimesByDate(date)
    .then(
      json => dispatch({ type: FETCH_DASHBOARD_AVERAGES_SUCCESS, payload: json }),
      error => dispatch({ type: FETCH_DASHBOARD_AVERAGES_FAILURE, payload: error })
    );
}

export const getSummaryByDate = date => dispatch => {
  dispatch(fetchDialySummaries());
  return speedOfServiceApi.getSummariesByDate(date)
    .then(
      json => dispatch(fetchDailySummariesSuccess(json)),
      error => dispatch(fetchDailySummariesFailure(error))
    );
}

export const getAverageTimesByDate = date => dispatch => {
  dispatch(fetchDailyAverageTimes())
  return speedOfServiceApi.getAverageTimesByDate(date)
    .then(
      json => dispatch(fetchDailyAverageTimesSuccess(json)),
      error => dispatch(fetchDailyAverageTimesFailure(error))
    );
}

export const getDailySummaryAndAverageTimes = date => dispatch => {
  dispatch(fetchDialySummaries());
  dispatch(fetchDailyAverageTimes());

  return speedOfServiceApi.getSummariesByDate(date)
    .then(
      json => dispatch(fetchDailySummariesSuccess(json)),
      error => dispatch(fetchDailySummariesFailure(error))
    )
    .then(
      () => speedOfServiceApi.getAverageTimesByDate(date)
        .then(
          json => dispatch(fetchDailyAverageTimesSuccess(json)),
          error => dispatch(fetchDailyAverageTimesFailure(error))
        )
    );
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