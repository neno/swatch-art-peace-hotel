/*
 *
 * GalleryContainer actions
 *
 */

import {
  GET_ARTWORKS,
  GET_ARTWORKS_SUCCEEDED,
  GET_ARTWORKS_FAILED,
} from './constants';

export function getArtworks() {
  return {
    type: GET_ARTWORKS,
  };
}


export function getArtworksSucceeded(artworks) {
  return {
    type: GET_ARTWORKS_SUCCEEDED,
    artworks,
  };
}

export function getArtworksFailed(message) {
  return {
    type: GET_ARTWORKS_FAILED,
    message,
  };
}
