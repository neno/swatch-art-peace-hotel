import React, { Children, PropTypes } from 'react';
import styled from 'styled-components';
import config from '../../config';

const Detail = ({ children }) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    
    @media (min-width: ${config.breakpointBoundaries.phoneUpperBoundary}px) {
      background: yellow;
    }
    @media (min-width: ${config.breakpointBoundaries.tabletPortraitUpperBoundary}px) {
      background: orange;
    }
   
    @media (min-width: ${config.breakpointBoundaries.tabletLandscapeUpperBoundary}px) {
      background: red;
    }
    
    @media (min-width: ${config.breakpointBoundaries.desktopUpperBoundary}px) {
      background: brown;
    }
  `;

  return (
    <Wrapper>
      {Children.toArray(children)}
    </Wrapper>
  );
};

Detail.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Detail;
