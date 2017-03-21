/**
*
* Logo
*
*/

import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { media } from '../../style-utils';
import logoImage from '../../img/logo.svg';

const Logo = () => {
  const Wrapper = styled(Link)`
    display: inline-block;
    max-width: 180px;
    font-size: 0;
    
    ${media.tablet`
      max-width: none;
    `}
  `;

  return (
    <Wrapper to="/">
      <img src={logoImage} alt={'The Swatch Art Peace Hotel'} />
    </Wrapper>
  );
};

export default Logo;

