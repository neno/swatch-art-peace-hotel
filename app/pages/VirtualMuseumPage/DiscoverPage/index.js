/*
 *
 * DiscoverPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../../components/PageTitle';
import GalleryContainer from '../../../containers/GalleryContainer';
import Gallery from '../../../components/Gallery';
import ScrollToTop from '../../../components/ScrollToTop';
import ApplyNow from '../../../components/ApplyNow';
import Constrained from '../../../components/Constrained';
import config from '../../../config';

export class DiscoverPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, description } = config.pages.VirtualMuseum.children.Discover;
    return (
      <div>
        <PageTitle title={title} description={description} />
        <GalleryContainer context="artwork">
          <Gallery />
        </GalleryContainer>
        <Constrained>
          <ScrollToTop />
          <ApplyNow />
        </Constrained>
      </div>
    );
  }
}

DiscoverPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DiscoverPage);
