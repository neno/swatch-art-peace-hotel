/**
 *
 * GalleryDetail
 *
 */

import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';
import Inner from './Inner';
import Detail from './Detail';
import Title from './Title';
import OverlayWrapper from './OverlayWrapper';
import Info from './Info';
import Overlay from '../Overlay';
import Image from '../Image';
import PrevNext, { skins } from '../PrevNext';
import Close from '../Close';
import ArtistInfo from '../ArtistInfo';

function GalleryDetail({ handleCollapse, handleExpand, prevId, nextId, artistInfo }) {
  const showPrev = (id) => {
    handleExpand(id);
  };

  const showNext = (id) => {
    handleExpand(id);
  };

  return (
    <Wrapper>
      <Inner>
        <PrevNext skin={skins.prev} handleClick={() => showPrev(prevId)} />
        <Detail>
          <Close handleClose={handleCollapse} />
          <OverlayWrapper>
            <Overlay trigger={<Image src={'http://placehold.it/433X560'} alt={'placeholder image'} />}>
              <Image src={'http://placehold.it/1400X1400'} alt={'placeholder image'} />
            </Overlay>
          </OverlayWrapper>
          <Info>
            <Title>
              Sebastian Wickeroth
            </Title>
            <ArtistInfo {...artistInfo} />
            <Title>
              Private Space
            </Title>
          </Info>
        </Detail>
        <PrevNext skin={skins.next} handleClick={() => showNext(nextId)} />
      </Inner>
    </Wrapper>
  );
}

GalleryDetail.propTypes = {
  // item: PropTypes.object.isRequired,
  handleCollapse: PropTypes.func.isRequired,
  handleExpand: PropTypes.func.isRequired,
  prevId: PropTypes.number,
  nextId: PropTypes.number,
  artistInfo: PropTypes.object,
};

GalleryDetail.defaultProps = {
  artistInfo: {
    name: 'Sebastian Wickeroth',
    imageSrc: 'http://placehold.it/120X120',
    dob: '1977',
    country: 'Germany',
    dateFrom: '19/10/2015',
    dateTo: '14/01/2016',
  },
};

export default GalleryDetail;
