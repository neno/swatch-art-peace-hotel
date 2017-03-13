/*
 *
 * GalleryContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Gallery from 'components/Gallery';
import _ from 'lodash';

import makeSelectGalleryContainer from './selectors';
import { getArtworks } from './actions';
import { getBreakpoint } from '../../constants/breakpoints';
import config from '../../config';


export class GalleryContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    getArtworks: PropTypes.func.isRequired,
    artworks: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      expandedId: null,
      nextId: null,
      prevId: null,
      itemsPerRow: 3,
      itemHeight: 150,
    };
  }

  componentDidMount() {
    this.props.getArtworks();
    this.setGrid();
    window.addEventListener('resize', _.throttle(this.setGrid, 100));
  }

  setGrid = () => {
    const breakpoint = getBreakpoint();
    this.setState({
      itemsPerRow: config.Gallery.itemsPerRow[breakpoint],
      itemHeight: config.Gallery.itemHeight[breakpoint],
    });
  };

  getItemWidth = (itemsPerRow) => `${100 / itemsPerRow}%`;

  getItems = (artworks, expandedId) => {
    if (expandedId) {
      const idx = this.calcIndex(expandedId, this.state.itemsPerRow);
      const expanded = Object.assign({}, _.find(artworks, { id: expandedId }), { expanded: true });

      return []
        .concat(artworks.slice(0, idx))
        .concat(expanded)
        .concat(artworks.slice(idx, artworks.length));
    }
    return artworks;
  };

  getArtwork = (id) => (
    _.find(this.props.artworks, { id })
  );

  getPrevId = (id) => {
    let prevId;
    const { artworks } = this.props;
    const idx = artworks.indexOf(this.getArtwork(id));
    if (artworks[idx - 1]) {
      prevId = artworks[idx - 1].id;
    }
    return prevId;
  };

  getNextId = (id) => {
    let nextId;
    const { artworks } = this.props;
    const idx = artworks.indexOf(this.getArtwork(id));
    if (artworks[idx + 1]) {
      nextId = artworks[idx + 1].id;
    }
    return nextId;
  };

  calcIndex = (n, itemsPerRow) => {
    const mod = n % itemsPerRow;
    if (mod > 0) {
      const diff = itemsPerRow - mod;
      return n + diff;
    }
    return n;
  };

  expandDetail = (id) => {
    this.setState({
      expandedId: id,
      prevId: this.getPrevId(id),
      nextId: this.getNextId(id),
    });
  };

  reset = () => {
    this.setState({
      expandedId: null,
      prevId: null,
      nextId: null,
    });
  };

  render() {
    const { artworks } = this.props;
    const { itemsPerRow, itemHeight, expandedId, prevId, nextId } = this.state;
    const items = this.getItems(artworks, expandedId);

    return (
      _.isEmpty(items) ?
        <div></div> :
        <Gallery
          items={items}
          handleExpand={this.expandDetail}
          handleCollapse={this.reset}
          itemWidth={this.getItemWidth(itemsPerRow)}
          itemHeight={`${itemHeight}px`}
          expandedId={expandedId}
          prevId={prevId}
          nextId={nextId}
        />
    );
  }
}

const mapStateToProps = makeSelectGalleryContainer();


function mapDispatchToProps(dispatch) {
  return {
    getArtworks: () => dispatch(getArtworks()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
