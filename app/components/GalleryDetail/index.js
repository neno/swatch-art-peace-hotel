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
import ArtistInfo from './ArtistInfo';
import Overlay from '../Overlay';
import Image from '../Image';
import PrevNext, { skins } from '../PrevNext';
import Close from '../Close';

function GalleryDetail({ handleCollapse, handleExpand, prevId, nextId }) {
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
          <ArtistInfo>
            <Title>
              Sebastian Wickeroth
            </Title>
            <Title>
              Private Space
            </Title>
          </ArtistInfo>
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
};

export default GalleryDetail;
