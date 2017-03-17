/**
*
* Gallery
*
*/

import React, { PropTypes } from 'react';
import GalleryItem from '../GalleryItem';
import GalleryDetail from '../GalleryDetail';
import Wrapper from './Wrapper';

const Gallery = ({ items, itemsPerRow, handleExpand, handleCollapse, itemWidth, itemHeight, expandedId, prevId, nextId }) => (
  <Wrapper>
    {
      items.map((item, idx) => (
        item.expanded ? (
          <GalleryDetail
            key={idx}
            item={item}
            handleCollapse={handleCollapse}
            handleExpand={handleExpand}
            prevId={prevId}
            nextId={nextId}
          />
        ) : (
          <GalleryItem
            key={idx}
            idx={idx}
            item={item}
            itemsPerRow={itemsPerRow}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            handleExpand={expandedId === item.id ? handleCollapse : handleExpand}
          />
        )
      ))
    }
  </Wrapper>
);

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
  handleExpand: PropTypes.func.isRequired,
  handleCollapse: PropTypes.func.isRequired,
  itemWidth: PropTypes.string.isRequired,
  itemHeight: PropTypes.string.isRequired,
  itemsPerRow: PropTypes.number.isRequired,
  expandedId: PropTypes.number,
  prevId: PropTypes.number,
  nextId: PropTypes.number,
};

export default Gallery;
