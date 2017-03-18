import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { REQUEST_FEATURES } from './constants';
import {
  requestFeaturesSucceeded,
  requestFeaturesFailed,
} from './actions';

import featuresData from '../../data/features.json';

function* fetchFeatures() {
  const features = featuresData;

  try {
    yield put(requestFeaturesSucceeded(features));
  } catch (e) {
    yield put(requestFeaturesFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchFeaturesSaga() {
  yield takeLatest(REQUEST_FEATURES, fetchFeatures);
}

// All sagas to be loaded
export default [
  fetchFeaturesSaga,
];
