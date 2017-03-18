/*
 *
 * FeaturesContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import makeSelectFeaturesContainer from './selectors';
import { requestFeatures } from './actions';
import Features from '../../components/Features';

export class FeaturesContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    requestFeatures: PropTypes.func.isRequired,
    features: PropTypes.array,
  };

  componentDidMount() {
    if (_.isEmpty(this.props.features)) {
      this.props.requestFeatures();
    }
  }

  render() {
    const { features } = this.props;
    return (
      _.isEmpty(features) ? (
        <div></div>
      ) : (
        <Features features={features} />
      )
    );
  }
}

const mapStateToProps = makeSelectFeaturesContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestFeatures: () => dispatch(requestFeatures()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesContainer);
