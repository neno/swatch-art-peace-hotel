/*
 *
 * SearchRandomContainer
 *
 */

import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectRandomSearch,
} from '../App/selectors';

import SearchRandom from '../../components/SearchRandom';

export class SearchRandomContainer extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    randomSearch: PropTypes.array,
  };

  render() {
    const { randomSearch } = this.props;
    return (
      <SearchRandom randomSearch={randomSearch} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  randomSearch: makeSelectRandomSearch(),
});

export default connect(mapStateToProps, null)(SearchRandomContainer);
