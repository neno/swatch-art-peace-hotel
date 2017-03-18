/*
 *
 * NewsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_NEWS_SUCCEEDED,
} from './constants';

// const news = [
//   {
//     date: 'March 10 2017',
//     title: 'IDEAT future award 2017',
//     text: 'The Swatch Art Peace Hotel has received this year’s IDEAT FUTURE AWARD in the category “Best Art Inspiration Project” at the Design Shanghai 2017.',
//   },
//   {
//     date: 'March 10 2017',
//     title: 'new artist: elin bengtsson',
//     text: 'Swedish artist Elin Bengtsson arrives at the artist residency of the Swatch Art Peace Hotel. Artistic focus: Visual Arts',
//   },
//   {
//     date: 'March 4 - May 21 2017',
//     title: 'exhibition with former artist-in-residence sook jin jo',
//     text: 'Former artist-in-residence Sook Jin Jo at the exhibition "Whispering Woods" in Aarau, Switzerland.',
//   },
// ];

const initialState = fromJS({
  news: [],
});

function newsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NEWS_SUCCEEDED:
      return state.set('news', action.news);
    default:
      return state;
  }
}

export default newsContainerReducer;
