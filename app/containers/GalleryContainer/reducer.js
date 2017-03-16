/*
 *
 * GalleryContainer reducer
 *
 */

import { fromJS } from 'immutable';
import _ from 'lodash';
import {
  GET_ARTWORKS_SUCCEEDED,
} from './constants';

const initialState = fromJS({});
const artworks = [];
_.forEach(_.range(53), (i) => (
  artworks[i] = { id: i + 1, title: `Artwork ${i + 1}` }
));

function galleryContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTWORKS_SUCCEEDED:
      return state.set('artworks', action.artworks);
    default:
      return state;
  }
}

export default galleryContainerReducer;
