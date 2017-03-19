import { createSelector } from 'reselect';

/**
 * Direct selector to the searchToggleContainer state domain
 */
const selectSearchToggleContainerDomain = () => (state) => state.get('searchToggleContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchToggleContainer
 */

const makeSelectSearchToggleContainer = () => createSelector(
  selectSearchToggleContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSearchToggleContainer;
export {
  selectSearchToggleContainerDomain,
};
