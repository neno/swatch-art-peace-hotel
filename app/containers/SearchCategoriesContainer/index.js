/*
 *
 * SearchContainer
 *
 */

import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectSearchCategories,
} from '../App/selectors';

import SearchCategories from '../../components/SearchCategories';

export class SearchCategoriesContainer extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    searchCategories: PropTypes.array,
  };

  render() {
    const { searchCategories } = this.props;
    return (
      <SearchCategories searchCategories={searchCategories} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  searchCategories: makeSelectSearchCategories(),
});

export default connect(mapStateToProps, null)(SearchCategoriesContainer);
