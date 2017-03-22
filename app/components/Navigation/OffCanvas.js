import React, { Children, PropTypes } from 'react';
import styled from 'styled-components';

import { media } from '../../style-utils';

const navWidth = '270px';

const getPositionLeft = (level) => (
  level === 1 ? '0' : navWidth
);

function OffCanvas({ children, isOpen, level }) {
  const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 50px 0;
    background: rgba(242,242,242, .89);
    transform: translateX(${isOpen ? '0' : -navWidth});
    
    ${media.tablet`
      width: ${navWidth};
      border-left: 1px solid #B9B6B6;
      
      transform: translateX(${isOpen ? getPositionLeft(level) : -navWidth});
      ${level === 2 ? 'border-left: solid 1px #b9b6b6;' : ''}
    `}
  `;

  return (
    <Wrapper>
      {Children.toArray(children)}
    </Wrapper>
  );
}

OffCanvas.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  level: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
};

export default OffCanvas;
