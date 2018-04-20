import { authApi } from '../../../Auth/utils/AuthApi';

class SpeedOfServiceApi {
  constructor() {
    this.BASE_URL = `http://localhost:3001/api/speedOfService`;
    this.access_token = authApi.acquireToken('speedOfService');
  }

  getSummariesByDate = (date) => {
    return this.access_token.then(token => {
      return fetch(`${this.BASE_URL}/summaries?date=${date}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            const error = { status: res.status, message: res.statusText };
            throw { error };
          }
        });
    });
  }

  getAverageTimesByDate = (date) => {
    return this.access_token.then(token => {
      return fetch(`${this.BASE_URL}/averages?date=${date}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            const error = { status: res.status, message: res.statusText };
            throw { error };
          }
        });
    });
  }
}

export let speedOfServiceApi = new SpeedOfServiceApi();