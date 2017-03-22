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

function GalleryItem({ idx, itemsPerRow, artworksLength, item, thumb, handleExpand, itemWidth, itemHeight, doMask }) {
  const lastRowStart = artworksLength - itemsPerRow;

  const Wrapper = styled.div`
    z-index: 5;
    position: relative;
    width: ${itemWidth};
    height: ${itemHeight};
    margin: 0;
    ${idx >= itemsPerRow ? 'margin-top: 10px;' : ''}
    ${idx <= lastRowStart ? 'margin-bottom: 10px;' : ''}
    background: #fff;
    cursor: pointer;
    
    transition: all .4s ease;
    
    /* transition for Mask */
    div {
      transition: all .4s ease;
    }
    
    &:hover {
      -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);
      -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);
      box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);
      z-index: 20;
      
      /* change bg color on hover to transparent so that image shines */
      div {
        background: rgba(0, 0, 0, 0);
      }
    }

  `;

  const Inner = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: url(${getImage(thumb)}) center;
    background-size: cover;
    
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  `;

  const Mask = styled.div`
    position: absolute;
    z-index: 7;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, ${doMask ? '.5' : '0'});
    pointer-events: none;
  `;

  return (
    <Wrapper onClick={() => handleExpand(item.id)}>
      <Inner>
        <Mask />
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
  doMask: PropTypes.bool.isRequired,
};

export default GalleryItem;
