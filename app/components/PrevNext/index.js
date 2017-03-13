/**
*
* PrevNext
*
*/

import React, { PropTypes } from 'react';
import Button from './Button';

export const skins = {
  prev: 'prev',
  next: 'next',
};

const getEnumValues = (obj) => Object.keys(obj).map((key) => obj[key]);

const PrevNext = ({ skin, handleClick }) => (
  <Button onClick={handleClick}>
    { skin === skins.prev ? '<' : '>'}
  </Button>
);

PrevNext.propTypes = {
  skin: PropTypes.oneOf(getEnumValues(skins)).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PrevNext;
