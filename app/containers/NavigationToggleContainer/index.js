/*
 *
 * NavigationToggleContainer
 *
 */

import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { makeSelectIsNavOpen } from '../App/selectors';
import { toggleNav } from '../App/actions';
import NavigationTrigger from '../../components/NavigationTrigger';

export class NavigationToggleContainer extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    isNavOpen: PropTypes.bool,
    toggleNav: PropTypes.func,
  };

  render() {
    return (
      <NavigationTrigger toggleNav={this.props.toggleNav} isNavOpen={this.props.isNavOpen} />
    );
  }
}

const mapStateToProps = createSelector(
  makeSelectIsNavOpen(),
  (isNavOpen) => ({ isNavOpen })
);

function mapDispatchToProps(dispatch) {
  return {
    toggleNav: () => dispatch(toggleNav()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationToggleContainer);
