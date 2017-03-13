/*
 *
 * GalleryContainer reducer
 *
 */

import { fromJS } from 'immutable';
import _ from 'lodash';
import {
  GET_ARTWORKS,
} from './constants';

const initialState = fromJS({});
const artworks = [];
_.forEach(_.range(53), (i) => (
  artworks[i] = { id: i + 1, title: `Artwork ${i + 1}` }
));

function galleryContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTWORKS:
      return state.set('artworks', artworks);
    default:
      return state;
  }
}

export default galleryContainerReducer;
