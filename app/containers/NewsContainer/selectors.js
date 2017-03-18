import { createSelector } from 'reselect';

/**
 * Direct selector to the newsContainer state domain
 */
const selectNewsContainerDomain = () => (state) => state.get('newsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewsContainer
 */

const makeSelectNewsContainer = () => createSelector(
  selectNewsContainerDomain(),
  (newsState) => (newsState ? newsState.toJS() : {})
);

export default makeSelectNewsContainer;
export {
  selectNewsContainerDomain,
};
