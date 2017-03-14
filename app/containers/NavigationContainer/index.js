/*
 *
 * NavigationContainer
 *
 */

import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Navigation from '../../components/Navigation';
import makeSelectNavigationContainer from './selectors';
import {
  getNavItems,
  activateItem,
  activateSubitem,
  openNav,
  closeNav,
} from './actions';

export class NavigationContainer extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    getNavItems: PropTypes.func.isRequired,
    activateItem: PropTypes.func.isRequired,
    activateSubitem: PropTypes.func.isRequired,
    closeNav: PropTypes.func.isRequired,
    openNav: PropTypes.func.isRequired,
    navItems: PropTypes.array,
    subNavItems: PropTypes.array,
    activeNavItem: PropTypes.string,
    activeSubNavItem: PropTypes.string,
    isOpenLevel1: PropTypes.bool,
    isOpenLevel2: PropTypes.bool,
  };

  static defaultProps = {
    isOpenLevel1: true,
    isOpenLevel2: false,
  };

  componentDidMount() {
    this.props.getNavItems();
  }

  sortNavItems = (navItems) => _.sortBy(navItems, 'sort');

  activateRoute = (e, navItem) => {
    e.preventDefault();
    this.props.activateItem(navItem);
  };

  activateSubRoute = (e, subNavItem) => {
    e.preventDefault();
    this.props.activateSubitem(subNavItem);
  };

  pushToRoute = (e) => {
    e.preventDefault();
    console.log('pushToRoute', e.target.href); // eslint-disable-line no-console
  };

  render() {
    const {
      navItems,
      subNavItems,
      activeNavItem,
      activeSubNavItem,
      isOpenLevel1,
      isOpenLevel2,
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
          isOpenLevel1={isOpenLevel1}
          isOpenLevel2={isOpenLevel2}
          handleOpen={this.props.openNav}
          handleClose={this.props.closeNav}
        />
      )
    );
  }
}

const mapStateToProps = makeSelectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    getNavItems: () => dispatch(getNavItems()),
    activateItem: (id) => dispatch(activateItem(id)),
    activateSubitem: (id) => dispatch(activateSubitem(id)),
    openNav: () => dispatch(openNav()),
    closeNav: () => dispatch(closeNav()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
