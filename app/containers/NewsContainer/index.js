/*
 *
 * NewsContainer
 *
 */

import React, { PropTypes, PureComponent, cloneElement } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import makeSelectNewsContainer from './selectors';
import { requestNews } from './actions';


export class NewsContainer extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    requestNews: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    news: PropTypes.array,
  };

  componentDidMount() {
    if (_.isEmpty(this.props.news)) {
      this.props.requestNews();
    }
  }

  render() {
    const { news } = this.props;
    return (
      _.isEmpty(news) ? (
        <div></div>
      ) : (
        cloneElement(
          this.props.children,
          { news }
        )
      )
    );
  }
}

const mapStateToProps = makeSelectNewsContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestNews: () => dispatch(requestNews()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
