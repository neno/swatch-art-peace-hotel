import { createSelector } from 'reselect';

/**
 * Direct selector to the galleryContainer state domain
 */
const selectGalleryContainerDomain = () => (state) => state.get('galleryContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GalleryContainer
 */

const makeSelectGalleryContainer = () => createSelector(
  selectGalleryContainerDomain(),
  (galleryContainerState) => (galleryContainerState ? galleryContainerState.toJS() : {})
);

export default makeSelectGalleryContainer;
export {
  selectGalleryContainerDomain,
};
