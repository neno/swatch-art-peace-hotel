import { createSelector } from 'reselect';

/**
 * Direct selector to the featuresContainer state domain
 */
const selectFeaturesContainerDomain = () => (state) => state.get('featuresContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FeaturesContainer
 */

const makeSelectFeaturesContainer = () => createSelector(
  selectFeaturesContainerDomain(),
  (featuresState) => (featuresState ? featuresState.toJS() : {})
);

export default makeSelectFeaturesContainer;
export {
  selectFeaturesContainerDomain,
};
