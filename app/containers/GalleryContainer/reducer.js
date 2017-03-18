/*
 *
 * GalleryContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_ARTWORKS_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  artworks: [],
});

function galleryContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTWORKS_SUCCEEDED: {
      const artworks = action.artworks.map((a) => {
        const artwork = a;
        artwork.defaultImage = {
          artwork: a.traceImage,
          artist: a.artist ? a.artist.profileImage : null,
        };
        return artwork;
      });
      return state.set('artworks', artworks);
    }
    default:
      return state;
  }
}

export default galleryContainerReducer;
