/**
 *
 * GalleryDetail
 *
 */

import React, { PureComponent, PropTypes } from 'react';
import _ from 'lodash';

import Wrapper from './Wrapper';
import Inner from './Inner';
import Detail from './Detail';
import H2 from '../H2';
import DetailImageWrapper from './DetailImageWrapper';
import Info from './Info';
import Actions from './Actions';
import Thumb from './Thumb';
import OverlayImage from './OverlayImage';
import PrivateSpaceWrapper from './PrivateSpaceWrapper';
import ThumbsWrapper from './ThumbsWrapper';
import Description from './Description';
import Overlay from '../Overlay';
import Image from '../Image';
import PrevNext, { skins } from '../PrevNext';
import Close from '../Close';
import ArtistInfo from '../ArtistInfo';

export class GalleryDetail extends PureComponent {

  static propTypes = {
    item: PropTypes.object.isRequired,
    handleCollapse: PropTypes.func.isRequired,
    handleExpand: PropTypes.func.isRequired,
    prevId: PropTypes.number,
    nextId: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      showFullScreen: false,
    };
  }

  componentWillMount() {
    const { item } = this.props;
    this.setDetailImage(item.traceImage);
  }

  componentWillReceiveProps(nextProps) {
    const { item } = nextProps;
    this.setDetailImage(item.traceImage);
  }

  setDetailImage = (img) => {
    this.setState({
      detailImage: img,
    });
  };

  goTo = (id) => {
    this.props.handleExpand(id);
  };

  toggleFullScreen = () => this.setState({ showFullScreen: !this.state.showFullScreen });

  render() {
    const { item, handleCollapse, prevId, nextId } = this.props;
    return (
      <Wrapper>
        <Inner>
          <Close handleClose={handleCollapse} />
          <PrevNext skin={skins.prev} handleClick={() => this.goTo(prevId)} />
          <Detail>
            <Actions />
            <DetailImageWrapper>
              <Overlay
                trigger={<Image src={this.state.detailImage} alt={item.title} />}
                isOpen={this.state.showFullScreen}
                handleOpen={this.toggleFullScreen}
                handleClose={this.toggleFullScreen}
              >
                <Close handleClose={this.toggleFullScreen} />
                <OverlayImage imageUrl={this.state.detailImage} />
              </Overlay>
            </DetailImageWrapper>
            <Info>
              <ArtistInfo
                artist={item.artist}
                title={!_.isEmpty(item.traceImages) && item.traceImages[0].title}
                setImage={this.setDetailImage}
              />
              {
                !_.isEmpty(item.traceImages) &&
                <ThumbsWrapper>
                  { item.traceImages.map((thumb, i) => (
                    <Thumb
                      key={i}
                      setImage={this.setDetailImage}
                      imageUrl={thumb.filename}
                    />
                  ))}
                </ThumbsWrapper>
              }
              {
                !!item.description &&

                <Description>
                  {<div dangerouslySetInnerHTML={{ __html: item.description }} />}
                </Description>
              }
              {
                !_.isEmpty(item.personalWorks) &&
                <PrivateSpaceWrapper>
                  <H2>
                    Private Space
                  </H2>
                  <ThumbsWrapper>
                    { item.personalWorks.map((work, i) => (
                      <Thumb
                        key={i}
                        setImage={this.setDetailImage}
                        imageUrl={work.filename}
                      />
                    ))}
                  </ThumbsWrapper>
                </PrivateSpaceWrapper>
              }
            </Info>
          </Detail>
          <PrevNext skin={skins.next} handleClick={() => this.goTo(nextId)} />
        </Inner>
      </Wrapper>
    );
  }
}

export default GalleryDetail;
