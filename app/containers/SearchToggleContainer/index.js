/*
 *
 * SearchToggleContainer
 *
 */

import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsSearchOpen } from '../App/selectors';
import { toggleSearch } from '../App/actions';
import SearchTrigger from '../../components/SearchTrigger';

export class SearchToggleContainer extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    toggleSearch: PropTypes.func.isRequired,
    isSearchOpen: PropTypes.bool,
  };

  render() {
    return (
      <SearchTrigger
        toggleSearch={this.props.toggleSearch}
        isSearchOpen={this.props.isSearchOpen}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isSearchOpen: makeSelectIsSearchOpen(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleSearch: () => dispatch(toggleSearch()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchToggleContainer);
