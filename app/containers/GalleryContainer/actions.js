/*
 *
 * GalleryContainer actions
 *
 */

import {
  GET_ARTWORKS,
} from './constants';

export function getArtworks() {
  return {
    type: GET_ARTWORKS,
  };
}
