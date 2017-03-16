/**
 *
 * Cell
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import config from '../../config';


function Thumb({ imageUrl, children }) {
  const Wrapper = styled.div`
    display: inline-block;
    width: 62px;
    height: 62px;
    border: 1px solid black;
    margin: 1rem 1rem 1rem 0;
    background: url(${config.imgDir}/${imageUrl}) center;
    background-size: cover;
  `;

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

Thumb.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Thumb;
