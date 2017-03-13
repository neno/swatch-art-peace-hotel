/**
*
* Navigation
*
*/

import React, { PropTypes } from 'react';
import NavList from './NavList';

const Navigation = ({ navItems, handleRoute }) => (
  <nav>
    <NavList navItems={navItems} handleRoute={handleRoute} />
  </nav>
);

Navigation.propTypes = {
  navItems: PropTypes.array.isRequired,
  handleRoute: PropTypes.func.isRequired,
};

export default Navigation;
