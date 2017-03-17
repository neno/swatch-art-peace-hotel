/**
*
* Gallery
*
*/

import React, { PropTypes } from 'react';
import GalleryItem from '../GalleryItem';
import GalleryDetail from '../GalleryDetail';
import Wrapper from './Wrapper';

const Gallery = ({ items, context, handleExpand, handleCollapse, itemWidth, itemHeight, expandedId, prevId, nextId }) => (
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
            item={item}
            thumb={item.defaultImage[context]}
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
  context: PropTypes.string.isRequired,
  handleExpand: PropTypes.func.isRequired,
  handleCollapse: PropTypes.func.isRequired,
  itemWidth: PropTypes.string.isRequired,
  itemHeight: PropTypes.string.isRequired,
  expandedId: PropTypes.number,
  prevId: PropTypes.number,
  nextId: PropTypes.number,
};

export default Gallery;
