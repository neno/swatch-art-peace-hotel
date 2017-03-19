
import { fromJS } from 'immutable';
import searchToggleContainerReducer from '../reducer';

describe('searchToggleContainerReducer', () => {
  it('returns the initial state', () => {
    expect(searchToggleContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
