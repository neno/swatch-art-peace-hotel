/**
 *
 * ScrollTo
 *
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import arrowDown from '../../img/arrow-down.svg';
import { media } from '../../style-utils';

const ScrollTo = ({ direction, to, offset, smooth }) => {
  const Wrapper = styled(Link)`
    display: none;
    margin: auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(0,0,0, 0.5);
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${(props) => (props.direction === 'up' && 'transform: rotate(180deg);')}
    transition: background .3s;
    
    &:hover,
    &:active {
      background: rgba(0,0,0, 1);
    } 
    
    ${media.tablet`
      display: flex;
    `}
  `;

  return (
    <Wrapper to={to} smooth={smooth} offset={offset} direction={direction}>
      <img src={arrowDown} alt="Arrow Down" />
    </Wrapper>
  );
};

ScrollTo.propTypes = {
  to: PropTypes.string,
  direction: PropTypes.string,
  smooth: PropTypes.bool,
  offset: PropTypes.number,
};

ScrollTo.defaultProps = {
  direction: 'down',
  smooth: true,
};

export default ScrollTo;
