/**
*
* Header
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import NavigationTrigger from '../NavigationTrigger';
import Logo from '../Logo';

const Header = () => (
  <Wrapper>
    <NavigationTrigger />
    <Logo />
  </Wrapper>
);

export default Header;
