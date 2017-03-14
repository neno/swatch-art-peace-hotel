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
const isPrev = (skin) => skin === skins.prev;

const PrevNext = ({ skin, handleClick }) => (
  <Button skin={skin} onClick={handleClick} title={isPrev(skin) ? 'Previous' : 'Next'}>
    { isPrev(skin) ? '<' : '>' }
  </Button>
);

PrevNext.propTypes = {
  skin: PropTypes.oneOf(getEnumValues(skins)).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PrevNext;
