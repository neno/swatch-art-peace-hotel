// makeSelectLocationState expects a plain JS object for the routing state
import { createSelector } from 'reselect';
// import makeSelectNavigationContainer from '../NavigationContainer/selectors';

// const makeSelectIsNavOpen = () => createSelector(
//   makeSelectNavigationContainer(),
//   (navigationContainerState) => navigationContainerState.isNavOpen
// );

const selectGlobal = (state) => state.get('global');

const makeSelectIsNavOpen = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isNavOpen')
);

const makeSelectIsSubNavOpen = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isSubNavOpen')
);

const makeSelectIsSearchOpen = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isSearchOpen')
);

const makeSelectNavItems = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('navItems').toJS()
);

const makeSelectSubNavItems = () => createSelector(
  selectGlobal,
  (globalState) => {
    try {
      return globalState.get('subNavItems').toJS();
    } catch (e) {
      return globalState.get('subNavItems');
    }
  }
);

const makeSelectActiveNavItem = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('activeNavItem')
);

const makeSelectActiveSubNavItem = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('activeSubNavItem')
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectLocationState,
  makeSelectIsNavOpen,
  makeSelectIsSubNavOpen,
  makeSelectIsSearchOpen,
  makeSelectNavItems,
  makeSelectSubNavItems,
  makeSelectActiveNavItem,
  makeSelectActiveSubNavItem,
};
