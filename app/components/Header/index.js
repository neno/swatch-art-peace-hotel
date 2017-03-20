/**
*
* Header
*
*/

import React from 'react';
import NavigationToggleContainer from '../../containers/NavigationToggleContainer';
import SearchToggleContainer from '../../containers/SearchToggleContainer';
import Wrapper from './Wrapper';
import Logo from '../Logo';

const Header = () => (
  <Wrapper>
    <NavigationToggleContainer />
    <Logo />
    <SearchToggleContainer />
  </Wrapper>
);

export default Header;
