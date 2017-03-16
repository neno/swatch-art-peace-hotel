import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import _ from 'lodash';

import { GET_ARTWORKS } from './constants';
import {
  getArtworksSucceeded,
  getArtworksFailed,
} from './actions';

import tracesData from '../../data/traces.json';

function* fetchArtworks() {
  const artworks = _.values(tracesData);

  try {
    yield put(getArtworksSucceeded(artworks));
  } catch (e) {
    yield put(getArtworksFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchArtworksSaga() {
  yield takeLatest(GET_ARTWORKS, fetchArtworks);
}

// All sagas to be loaded
export default [
  fetchArtworksSaga,
];
