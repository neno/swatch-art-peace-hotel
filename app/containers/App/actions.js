/*
 *
 * NavigationContainer actions
 *
 */

import {
  TOGGLE_NAV,
  TOGGLE_SEARCH,
  ACTIVATE_NAV_ITEM,
  ACTIVATE_SUB_NAV_ITEM,
} from './constants';

export function toggleNav() {
  return {
    type: TOGGLE_NAV,
  };
}

export function activateNavItem(item) {
  return {
    type: ACTIVATE_NAV_ITEM,
    item,
  };
}

export function activateSubNavItem(item) {
  return {
    type: ACTIVATE_SUB_NAV_ITEM,
    item,
  };
}

export function toggleSearch() {
  return {
    type: TOGGLE_SEARCH,
  };
}
