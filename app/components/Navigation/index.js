/**
*
* Navigation
*
*/

import React, { PropTypes } from 'react';
import Nav from './Nav';
import NavList from './NavList';

const Navigation = ({ navItems, handleRoute, isNavActive }) => (
  <Nav active={isNavActive}>
    <NavList navItems={navItems} handleRoute={handleRoute} />
  </Nav>
);

Navigation.propTypes = {
  navItems: PropTypes.array.isRequired,
  handleRoute: PropTypes.func.isRequired,
  isNavActive: PropTypes.bool.isRequired,
};

Navigation.defaultProps = {
  isNavActive: true,
};

export default Navigation;
