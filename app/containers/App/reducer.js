/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import _ from 'lodash';

import {
  TOGGLE_NAV,
  TOGGLE_SEARCH,
  ACTIVATE_NAV_ITEM,
  ACTIVATE_SUB_NAV_ITEM,
} from './constants';

import navData from '../../data/navigation.json';

const initialState = fromJS({
  isNavOpen: false,
  isSubNavOpen: false,
  isSearchOpen: false,
  navItems: navData,
  subNavItems: [],
  activeNavItem: null,
  activeSubNavItem: null,
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV: {
      const isNavOpen = state.get('isNavOpen');
      return state
        .set('isNavOpen', !isNavOpen)
        .set('isSubNavOpen', false)
        .set('isSearchOpen', false);
    }
    case ACTIVATE_NAV_ITEM:
      return state
        .set('isSubNavOpen', true)
        .set('subNavItems', _.isEmpty(action.item.children) ? [] : _.sortBy(action.item.children, 'sort'))
        .set('activeNavItem', action.item.id)
        .set('activeSubNavItem', null);
    case ACTIVATE_SUB_NAV_ITEM:
      return state.set('activeSubNavItem', action.item.id);
    case TOGGLE_SEARCH: {
      const isSearchOpen = state.get('isSearchOpen');
      return state
        .set('isSearchOpen', !isSearchOpen)
        .set('isNavOpen', false);
    }
    default:
      return state;
  }
}

export default navigationContainerReducer;
