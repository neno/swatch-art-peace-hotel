/*
 *
 * FeaturesContainer actions
 *
 */

import {
  REQUEST_FEATURES,
  REQUEST_FEATURES_SUCCEEDED,
  REQUEST_FEATURES_FAILED,
} from './constants';

export function requestFeatures() {
  return {
    type: REQUEST_FEATURES,
  };
}

export function requestFeaturesSucceeded(features) {
  return {
    type: REQUEST_FEATURES_SUCCEEDED,
    features,
  };
}

export function requestFeaturesFailed(message) {
  return {
    type: REQUEST_FEATURES_FAILED,
    message,
  };
}
