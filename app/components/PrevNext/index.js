/**
*
* PrevNext
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import arrowPrev from '../../img/arrow-prev.svg';
import arrowNext from '../../img/arrow-next.svg';

export const skins = {
  prev: 'prev',
  next: 'next',
};

const getEnumValues = (obj) => Object.keys(obj).map((key) => obj[key]);
const isPrev = (skin) => skin === skins.prev;

const PrevNext = ({ skin, handleClick }) => {
  const Button = styled.button`
    z-index: 100;
    position: absolute;
    bottom: 0;
    ${skin === 'next' ? 'right' : 'left'}: 0;
    width: 50px;
    padding: 0;
    outline: 0;
    appearance: none;
    transition: color .4s ease;
    
    &:hover {
      color: #C6C6C6;
    }
  `;

  return (
    <Button skin={skin} onClick={handleClick} title={isPrev(skin) ? 'Previous' : 'Next'}>
      <img src={isPrev(skin) ? arrowPrev : arrowNext} alt={skin} />
    </Button>
  );
};

PrevNext.propTypes = {
  skin: PropTypes.oneOf(getEnumValues(skins)).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PrevNext;
