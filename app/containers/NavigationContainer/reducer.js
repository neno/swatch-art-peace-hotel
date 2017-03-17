/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import _ from 'lodash';

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
      children: [
        {
          id: 'manifesto',
          title: 'manifesto',
          path: '/artist-residency/manifesto',
          sort: 5,
        },
        {
          id: 'artistsInResidence',
          title: 'artists in residence',
          path: '/artist-residency/artists-in-residence',
          sort: 10,
        },
        {
          id: 'news',
          title: 'news',
          path: '/artist-residency/news',
          sort: 15,
        },
      ],
    },
    {
      id: 'applyParticipate',
      title: 'apply & participate',
      path: '/apply-participate',
      sort: 10,
      children: [
        {
          id: 'whatYouGet',
          title: 'what you get',
          path: '/apply-participate/what-you-get',
          sort: 5,
        },
        {
          id: 'artistTrace',
          title: 'artist trace',
          path: '/apply-participate/artist-trace',
          sort: 10,
        },
        {
          id: 'donationToMsf',
          title: 'donation to msf',
          path: '/apply-participate/donation to msf',
          sort: 15,
        },
        {
          id: 'termsConditions',
          title: 'terms and conditions',
          path: '/apply-participate/terms-conditions',
          sort: 20,
        },
      ],
    },
    {
      id: 'hotel',
      title: 'hotel',
      path: '/hotel',
      sort: 15,
      children: [
        {
          id: 'historyOfTheHotel',
          title: 'history of the hotel',
          path: '/hotel/history-building',
          sort: 5,
        },
        {
          id: 'facilitiesServices',
          title: 'facilities and services',
          path: '/hotel/facilities-services',
          sort: 10,
        },
      ],
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
          path: '/virtual-museum-discover',
          sort: 5,
        },
        {
          id: 'meetArtists',
          title: 'meet artists',
          path: '/virtual-museum-meet-artists',
          sort: 10,
        },
        {
          id: 'aboutVirtualMuseum',
          title: 'about',
          path: '/virtual-museum-about',
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
  subNavItems: [],
  activeNavItem: null,
  activeSubNavItem: null,
  isOpenLevel1: false,
  isOpenLevel2: false,
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NAV_ITEMS:
      return state;
    case OPEN_NAV:
      return state.set('isOpenLevel1', true);
    case CLOSE_NAV:
      return state
        .set('subNavItems', [])
        .set('isOpenLevel1', false)
        .set('isOpenLevel2', false)
        .set('activeNavItem', null)
        .set('activeSubNavItem', null);
    case ACTIVATE_ITEM:
      return state
        .set('activeNavItem', action.item.id)
        .set('subNavItems', _.isEmpty(action.item.children) ? [] : _.sortBy(action.item.children, 'sort'))
        .set('isOpenLevel1', true)
        .set('isOpenLevel2', !_.isEmpty(action.item.children))
        .set('activeSubNavItem', null);
    case ACTIVATE_SUBITEM:
      return state.set('activeSubNavItem', action.item.id);
    default:
      return state;
  }
}

export default navigationContainerReducer;
