/*
 *
 * ImpressumPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Constrained from '../../components/Constrained';
import PageTitle from '../../components/PageTitle';
import config from '../../config';
import Impressum from '../../components/Impressum';

export class ImpressumPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, description } = config.pages.HomePage;
    return (
      <Constrained>
        <PageTitle title={title} description={description} />
        <Impressum />
      </Constrained>
    );
  }
}

ImpressumPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ImpressumPage);
