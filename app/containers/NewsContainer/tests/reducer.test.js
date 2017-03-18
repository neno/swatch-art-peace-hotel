
import { fromJS } from 'immutable';
import newsContainerReducer from '../reducer';

describe('newsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(newsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
