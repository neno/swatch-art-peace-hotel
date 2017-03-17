/*
 *
 * ArtistsInResidencePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/PageTitle';
import GalleryContainer from '../../containers/GalleryContainer';
import config from '../../config';

export class ArtistsInResidencePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, description } = config.pages.ArtistsInResidence;
    return (
      <div>
        <PageTitle title={title} description={description} />
        <GalleryContainer context="artist" />
      </div>
    );
  }
}

ArtistsInResidencePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ArtistsInResidencePage);
