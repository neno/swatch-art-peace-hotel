/*
 *
 * NavigationContainer actions
 *
 */

import {
  GET_NAV_ITEMS,
  OPEN_NAV,
  CLOSE_NAV,
  ACTIVATE_ITEM,
  ACTIVATE_SUBITEM,
} from './constants';

export function getNavItems() {
  return {
    type: GET_NAV_ITEMS,
  };
}

export function openNav() {
  return {
    type: OPEN_NAV,
  };
}

export function closeNav() {
  return {
    type: CLOSE_NAV,
  };
}

export function activateItem(id) {
  return {
    type: ACTIVATE_ITEM,
    id,
  };
}

export function activateSubitem(id) {
  return {
    type: ACTIVATE_SUBITEM,
    id,
  };
}
