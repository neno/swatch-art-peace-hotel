/**
 *
 * ScrollTo
 *
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import arrowDown from '../../img/arrow-down.svg';

const ScrollTo = ({ direction, to, smooth }) => {
  const Wrapper = styled(Link)`
    display: flex;
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
  `;

  return (
    <Wrapper to={to} smooth={smooth} direction={direction}>
      <img src={arrowDown} alt="Arrow Down" />
    </Wrapper>
  );
};

ScrollTo.propTypes = {
  to: PropTypes.string,
  direction: PropTypes.string,
  smooth: PropTypes.bool,
};

ScrollTo.defaultProps = {
  direction: 'down',
  smooth: true,
};

export default ScrollTo;
