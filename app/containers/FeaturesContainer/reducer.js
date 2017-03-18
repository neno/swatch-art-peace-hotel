/*
 *
 * FeaturesContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_FEATURES_SUCCEEDED,
} from './constants';

const initialState = fromJS({});

function featuresContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FEATURES_SUCCEEDED:
      return state.set('features', action.features);
    default:
      return state;
  }
}

export default featuresContainerReducer;
