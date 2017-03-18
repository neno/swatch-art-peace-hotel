/**
*
* Cell
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Image from '../Image';
import config from '../../config';

const getImage = (thumb) => {
  if (thumb) {
    return `${thumb}`;
  }
  return config.Gallery.defaultImage;
};

function GalleryItem({ idx, itemsPerRow, artworksLength, item, thumb, handleExpand, itemWidth, itemHeight }) {
  const lastRowStart = artworksLength - itemsPerRow;

  const Wrapper = styled.div`
    z-index: 5;
    position: relative;
    width: ${itemWidth};
    height: ${itemHeight};
    margin: 0;
    ${idx >= itemsPerRow ? 'border-top: 10px solid #999;' : ''}
    ${idx <= lastRowStart ? 'border-bottom: 10px solid #999;' : ''}
    background: #818181;
    cursor: pointer;
    

  `;

  const Inner = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: -1px;
    border-left: 1px solid #5F5F5F;
    background: url(${getImage(thumb)}) center;
    background-size: cover;
    
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  `;

  return (
    <Wrapper onClick={() => handleExpand(item.id)}>
      <Inner>
        <Image src={getImage(thumb)} alt={'thumb'} />
      </Inner>
    </Wrapper>
  );
}

GalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
  thumb: PropTypes.string,
  handleExpand: PropTypes.func.isRequired,
  itemWidth: PropTypes.string.isRequired,
  itemHeight: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  itemsPerRow: PropTypes.number.isRequired,
  artworksLength: PropTypes.number.isRequired,
};

export default GalleryItem;
