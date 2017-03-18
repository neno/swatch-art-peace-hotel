/**
 *
 * Cell
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import config from '../../config';


function Thumb({ imageUrl, setImage }) {
  const Button = styled.button`
    display: inline-block;
    width: 62px;
    height: 62px;
    border: 1px solid black;
    margin: 16px 16px 0 0;
    background: url(${config.imgDir}/${imageUrl}) center;
    background-size: cover;
  `;

  return (
    <Button onClick={() => setImage(imageUrl)} />
  );
}

Thumb.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
};

export default Thumb;
