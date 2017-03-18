/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import logoImage from '../../img/logo.svg';

const StyledLink = styled(Link)`
`;

const Logo = () => (
  <StyledLink to="/">
    <img src={logoImage} alt={'The Swatch Art Peace Hotel'} />
  </StyledLink>
);

export default Logo;

