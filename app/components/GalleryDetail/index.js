/**
 *
 * GalleryDetail
 *
 */

import React, { PropTypes } from 'react';
import _ from 'lodash';

import Wrapper from './Wrapper';
import Inner from './Inner';
import Detail from './Detail';
import Title from '../ArtistInfo/Title';
import DetailImageWrapper from './DetailImageWrapper';
import Info from './Info';
import Overlay from '../Overlay';
import Image from '../Image';
import PrevNext, { skins } from '../PrevNext';
import Close from '../Close';
import ArtistInfo from '../ArtistInfo';
import Thumb from './Thumb';

function GalleryDetail({ item, handleCollapse, handleExpand, prevId, nextId }) {
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
          <DetailImageWrapper>
            <Overlay trigger={<Image src={item.traceImage} alt={item.title} />}>
              <Image src={item.traceImage} alt={item.title} />
            </Overlay>
          </DetailImageWrapper>
          <Info>
            <ArtistInfo
              artist={item.artist}
              title={!_.isEmpty(item.traceImages) && item.traceImages[0].title}
            />
            {
              !_.isEmpty(item.traceImages) &&
              <div>
                { item.traceImages.map((thumb, i) => <Thumb key={i} imageUrl={thumb.filename} />) }
              </div>
            }
            {
              !!item.description &&
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            }
            {
              !_.isEmpty(item.personalWorks) &&
              <div>
                <Title>
                  Private Space
                </Title>
                { item.personalWorks.map((thumb, i) => <Thumb key={i} imageUrl={thumb.filename} />) }
              </div>
            }
          </Info>
        </Detail>
        <PrevNext skin={skins.next} handleClick={() => showNext(nextId)} />
      </Inner>
    </Wrapper>
  );
}

GalleryDetail.propTypes = {
  item: PropTypes.object.isRequired,
  handleCollapse: PropTypes.func.isRequired,
  handleExpand: PropTypes.func.isRequired,
  prevId: PropTypes.number,
  nextId: PropTypes.number,
};


export default GalleryDetail;