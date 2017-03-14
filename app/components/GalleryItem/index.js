/**
*
* Cell
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

function GalleryItem({ item, handleExpand, itemWidth, itemHeight, backgroundImage }) {
  const Wrapper = styled.div`
    z-index: 5;
    position: relative;
    width: ${itemWidth};
    height: ${itemHeight};
    margin: 0;
    border-top: 10px solid #999;
    border-bottom: 10px solid #999;
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
    background: url(${backgroundImage}) center;
    background-size: cover;
  `;

  return (
    <Wrapper onClick={() => handleExpand(item.id)}>
      <Inner />
    </Wrapper>
  );
}

GalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleExpand: PropTypes.func.isRequired,
  itemWidth: PropTypes.string.isRequired,
  itemHeight: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default GalleryItem;
