/**
*
* Logo
*
*/

import React from 'react';
import { Link } from 'react-router';
import logoImage from '../../img/logo.svg';

const Logo = () => (
  <Link to="/">
    <img src={logoImage} alt={'The Swatch Art Peace Hotel'} />
  </Link>
);

export default Logo;

