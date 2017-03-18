import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { REQUEST_NEWS } from './constants';
import {
  requestNewsSucceeded,
  requestNewsFailed,
} from './actions';

import newsData from '../../data/news.json';

function* fetchNews() {
  const news = newsData;

  try {
    yield put(requestNewsSucceeded(news));
  } catch (e) {
    yield put(requestNewsFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchNewsSaga() {
  yield takeLatest(REQUEST_NEWS, fetchNews);
}

// All sagas to be loaded
export default [
  fetchNewsSaga,
];
