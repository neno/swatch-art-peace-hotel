/*
 *
 * NavigationContainer
 *
 */

import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';
import _ from 'lodash';

import Navigation from '../../components/Navigation';
import {
  makeSelectNavItems,
  makeSelectSubNavItems,
  makeSelectIsNavOpen,
  makeSelectIsSubNavOpen,
  makeSelectActiveNavItem,
  makeSelectActiveSubNavItem,
} from '../App/selectors';
import {
  activateNavItem,
  activateSubNavItem,
  toggleNav,
} from '../App/actions';

export class NavigationContainer extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    activateNavItem: PropTypes.func.isRequired,
    activateSubNavItem: PropTypes.func.isRequired,
    toggleNav: PropTypes.func.isRequired,
    navItems: PropTypes.array,
    subNavItems: PropTypes.array,
    activeNavItem: PropTypes.string,
    activeSubNavItem: PropTypes.string,
    isNavOpen: PropTypes.bool,
    isSubNavOpen: PropTypes.bool,
  };

  static defaultProps = {
    isSubNavOpen: false,
  };

  sortNavItems = (navItems) => _.sortBy(navItems, 'sort');

  activateRoute = (e, navItem) => {
    this.pushToRoute(e);
    this.props.activateNavItem(navItem);
  };

  activateSubRoute = (e, subNavItem) => {
    this.pushToRoute(e);
    this.props.activateSubNavItem(subNavItem);
  };

  pushToRoute = (e) => {
    e.preventDefault();

    const base = window.location.origin;
    const allowedPaths = [
      `${base}/virtual-museum-discover`,
      `${base}/virtual-museum-meet-artists`,
    ];

    if (_.includes(allowedPaths, e.target.href)) {
      browserHistory.push(e.target.href);
      this.props.toggleNav();
    }
  };

  render() {
    const {
      navItems,
      subNavItems,
      activeNavItem,
      activeSubNavItem,
      isNavOpen,
      isSubNavOpen,
    } = this.props;
    const items = !_.isEmpty(navItems) ? this.sortNavItems(navItems) : [];
    return (
      _.isEmpty(items) ? (
        <div></div>
      ) : (
        <Navigation
          navItems={items}
          subNavItems={subNavItems}
          handleRoute={this.activateRoute}
          handleSubRoute={this.activateSubRoute}
          activeNavItem={activeNavItem}
          activeSubNavItem={activeSubNavItem}
          isNavOpen={isNavOpen}
          isSubNavOpen={isSubNavOpen}
        />
      )
    );
  }
}

const mapStateToProps = createStructuredSelector({
  navItems: makeSelectNavItems(),
  subNavItems: makeSelectSubNavItems(),
  isNavOpen: makeSelectIsNavOpen(),
  isSubNavOpen: makeSelectIsSubNavOpen(),
  activeNavItem: makeSelectActiveNavItem(),
  activeSubNavItem: makeSelectActiveSubNavItem(),
});


function mapDispatchToProps(dispatch) {
  return {
    activateNavItem: (id) => dispatch(activateNavItem(id)),
    activateSubNavItem: (id) => dispatch(activateSubNavItem(id)),
    toggleNav: () => dispatch(toggleNav()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
