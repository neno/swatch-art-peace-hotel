/*
 *
 * NavigationContainer actions
 *
 */

import {
  OPEN_NAV,
  CLOSE_NAV,
  TOGGLE_NAV,
  REQUEST_NAV_ITEMS,
  REQUEST_NAV_ITEMS_SUCCEEDED,
  REQUEST_NAV_ITEMS_FAILED,
  ACTIVATE_NAV_ITEM,
  ACTIVATE_SUB_NAV_ITEM,
} from './constants';


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

export function toggleNav() {
  return {
    type: TOGGLE_NAV,
  };
}

export function requestNavItems() {
  return {
    type: REQUEST_NAV_ITEMS,
  };
}

export function requestNavItemsSucceeded(navItems) {
  return {
    type: REQUEST_NAV_ITEMS_SUCCEEDED,
    navItems,
  };
}

export function requestNavItemsFailed(message) {
  return {
    type: REQUEST_NAV_ITEMS_FAILED,
    message,
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
