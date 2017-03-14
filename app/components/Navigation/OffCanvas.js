import React, { Children, PropTypes } from 'react';
import styled from 'styled-components';

const navWidth = '300px';

const getPositionLeft = (level) => (
  level === 1 ? '0' : navWidth
);

function OffCanvas({ children, isOpen, level }) {
  const Wrapper = styled.div`
    position: fixed;
    z-index: 9000;
    width: ${navWidth};
    height: 100%;
    top: 80px;
    background: rgba(197,197,197, 0.8);
    transform: translateX(${isOpen ? getPositionLeft(level) : -navWidth});
    // transition: transform .4s;
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
