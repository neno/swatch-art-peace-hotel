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
} from './actions';

export class NavigationContainer extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    getNavItems: PropTypes.func.isRequired,
    navItems: PropTypes.array,
  };

  componentDidMount() {
    this.props.getNavItems();
  }

  sortNavItems = (navItems) => _.sortBy(navItems, 'sort');

  pushToRoute = (e) => {
    e.preventDefault();
    console.log('pushToRoute', e.target.href); // eslint-disable-line no-console
  };

  render() {
    const { navItems } = this.props;
    const items = !_.isEmpty(navItems) ? this.sortNavItems(navItems) : [];
    return (
      _.isEmpty(items) ? (
        <div></div>
      ) : (
        <Navigation navItems={items} handleRoute={this.pushToRoute} />
      )
    );
  }
}

const mapStateToProps = makeSelectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    getNavItems: () => dispatch(getNavItems()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
