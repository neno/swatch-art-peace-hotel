/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_NAV_ITEMS,
  OPEN_NAV,
  CLOSE_NAV,
  ACTIVATE_ITEM,
  ACTIVATE_SUBITEM,
} from './constants';

const initialState = fromJS({
  navItems: [
    {
      id: 'artistResidency',
      title: 'artist residency',
      path: '/artist-residency',
      sort: 5,
    },
    {
      id: 'applyParticipate',
      title: 'apply & participate',
      path: '/apply-participate',
      sort: 10,
    },
    {
      id: 'hotel',
      title: 'hotel',
      path: '/hotel',
      sort: 15,
    },
    {
      id: 'virtualMuseum',
      title: 'virtual museum',
      path: '/virtual-museum',
      sort: 20,
      children: [
        {
          id: 'discoverArtWorks',
          title: 'discover art works',
          path: '/virtual-museum/discover',
          sort: 5,
        },
        {
          id: 'meetArtists',
          title: 'meet artists',
          path: '/virtual-museum/meet-artists',
          sort: 10,
        },
        {
          id: 'aboutVirtualMuseum',
          title: 'about',
          path: '/virtual-museum/about',
          sort: 15,
        },
      ],
    },
    {
      id: 'aboutUs',
      title: 'about us',
      path: '/about',
      sort: 25,
    },
  ],
  activeNavItem: null,
  activeSubNavItem: null,
  isOpenLevel1: false,
  isOpenLevel2: false,
});

function navigationContainerReducer(state = initialState, action) {
  const hasChildren = () => false;

  switch (action.type) {
    case GET_NAV_ITEMS:
      return state;
    case OPEN_NAV:
      return state.set('isOpenLevel1', true);
    case CLOSE_NAV:
      return state
        .set('isOpenLevel1', false)
        .set('isOpenLevel2', false)
        .set('activeNavItem', null)
        .set('activeSubNavItem', null);
    case ACTIVATE_ITEM:
      return state
        .set('activeNavItem', action.key)
        .set('isOpenLevel2', hasChildren(action.key))
        .set('activeSubNavItem', null);
    case ACTIVATE_SUBITEM:
      return state.set('activeSubNavItem', action.key);
    default:
      return state;
  }
}

export default navigationContainerReducer;
