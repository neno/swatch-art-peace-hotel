
import { fromJS } from 'immutable';
import featuresContainerReducer from '../reducer';

describe('featuresContainerReducer', () => {
  it('returns the initial state', () => {
    expect(featuresContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
