/**
*
* Image
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';


const Image = ({ src, alt }) => (
  <img src={src} alt={alt} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
