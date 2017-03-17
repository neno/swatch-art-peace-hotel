/**
 *
 * Cell
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import config from '../../config';


function OverlayImage({ imageUrl }) {
  const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${config.imgDir}/${imageUrl}) no-repeat center center;
    background-size: contain;
  `;

  return (
    <Wrapper />
  );
}

OverlayImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default OverlayImage;
