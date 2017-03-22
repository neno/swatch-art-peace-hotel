/**
*
* Gallery
*
*/

import React, { PropTypes } from 'react';
import _ from 'lodash';

import GalleryItem from '../GalleryItem';
import GalleryDetail from '../GalleryDetail';
import Wrapper from './Wrapper';
import Mask from './Mask';

const Gallery = ({ artworksLength, itemsPerRow, items, context, handleExpand, handleCollapse, itemWidth, itemHeight, expandedId, prevId, nextId }) => (
  <Wrapper>
    {
      expandedId && <Mask />
    }
    {
      !_.isEmpty(items) &&
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
            artworksLength={artworksLength}
            itemsPerRow={itemsPerRow}
            item={item}
            thumb={item.defaultImage[context]}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            handleExpand={expandedId === item.id ? handleCollapse : handleExpand}
            doMask={!!expandedId}
          />
        )
      ))
    }
  </Wrapper>
);

Gallery.propTypes = {
  items: PropTypes.array,
  context: PropTypes.string,
  handleExpand: PropTypes.func,
  handleCollapse: PropTypes.func,
  itemWidth: PropTypes.string,
  itemHeight: PropTypes.string,
  itemsPerRow: PropTypes.number,
  artworksLength: PropTypes.number,
  expandedId: PropTypes.number,
  prevId: PropTypes.number,
  nextId: PropTypes.number,
};

export default Gallery;
