/**
*
* Header
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import NavigationTrigger from '../NavigationTrigger';
import Logo from '../Logo';
import SearchTrigger from '../SearchTrigger';

const Header = () => (
  <Wrapper>
    <NavigationTrigger isNavActive={false} />
    <Logo />
    <SearchTrigger />
  </Wrapper>
);

export default Header;
