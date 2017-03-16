/**
*
* Image
*
*/

import React, { PropTypes } from 'react';
import config from '../../config';

const Image = ({ src, alt }) => (
  <img src={`${config.imgDir}/${src}`} alt={alt} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  src: config.Gallery.defaultImage,
  alt: 'placeholder image',
};

export default Image;
