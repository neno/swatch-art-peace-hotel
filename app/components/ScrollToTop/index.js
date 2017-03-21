/**
*
* ScrollToTop
*
*/

import React from 'react';
import { animateScroll } from 'react-scroll';
import styled from 'styled-components';
import arrowDown from '../../img/arrow-down.svg';


const ScrollToTop = () => {
  const Link = styled.a`
    display: flex;
    margin: auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(0,0,0, 0.5);
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: rotate(180deg);
    transition: background .3s;
    
    &:hover,
    &:active {
      background: rgba(0,0,0, 1);
    }  
  `;

  return (
    <Link onClick={animateScroll.scrollToTop}>
      <img src={arrowDown} alt="Arrow Down" />
    </Link>
  );
};

export default ScrollToTop;
