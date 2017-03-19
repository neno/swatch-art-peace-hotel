/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const OPEN_NAV = 'OPEN_NAV';
export const CLOSE_NAV = 'CLOSE_NAV';
export const TOGGLE_NAV = 'TOGGLE_NAV';

export const REQUEST_NAV_ITEMS = 'REQUEST_NAV_ITEMS';
export const REQUEST_NAV_ITEMS_SUCCEEDED = 'REQUEST_NAV_ITEMS_SUCCEEDED';
export const REQUEST_NAV_ITEMS_FAILED = 'REQUEST_NAV_ITEMS_FAILED';

export const ACTIVATE_NAV_ITEM = 'ACTIVATE_NAV_ITEM';
export const ACTIVATE_SUB_NAV_ITEM = 'ACTIVATE_SUB_NAV_ITEM';
