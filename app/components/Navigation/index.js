/**
*
* Navigation
*
*/

import React, { PropTypes } from 'react';
import _ from 'lodash';
import Nav from './Nav';
import OffCanvas from './OffCanvas';
import NavList from './NavList';

const Navigation = ({
  navItems,
  subNavItems,
  handleRoute,
  handleSubRoute,
  activeNavItem,
  activeSubNavItem,
  isNavOpen,
  isSubNavOpen,
}) => (
  <Nav>
    {
      isNavOpen &&
      <OffCanvas className="navLevel1" isOpen={isNavOpen} level={1}>
        <NavList items={navItems} handleRoute={handleRoute} activeItem={activeNavItem} />
      </OffCanvas>
    }
    {
      (isSubNavOpen && !_.isEmpty(subNavItems)) &&
      <OffCanvas className="navLevel2" isOpen={isSubNavOpen} level={2}>
        <NavList items={subNavItems} handleRoute={handleSubRoute} activeItem={activeSubNavItem} />
      </OffCanvas>
    }
  </Nav>
);

Navigation.propTypes = {
  navItems: PropTypes.array.isRequired,
  subNavItems: PropTypes.array,
  handleRoute: PropTypes.func.isRequired,
  handleSubRoute: PropTypes.func.isRequired,
  activeNavItem: PropTypes.string,
  activeSubNavItem: PropTypes.string,
  isNavOpen: PropTypes.bool,
  isSubNavOpen: PropTypes.bool,
};

export default Navigation;
