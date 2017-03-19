/**
*
* Header
*
*/

import React from 'react';
import NavigationToggleContainer from '../../containers/NavigationToggleContainer';
import Wrapper from './Wrapper';
import Logo from '../Logo';
import SearchTrigger from '../SearchTrigger';

const Header = () => (
  <Wrapper>
    <NavigationToggleContainer />
    <Logo />
    <SearchTrigger />
  </Wrapper>
);

export default Header;
