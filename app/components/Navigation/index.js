/**
*
* Navigation
*
*/

import React, { PropTypes } from 'react';
import _ from 'lodash';
import OffCanvas from './OffCanvas';
import NavList from './NavList';

const Navigation = ({
  navItems,
  subNavItems,
  handleRoute,
  handleSubRoute,
  activeNavItem,
  activeSubNavItem,
  isOpenLevel1,
  isOpenLevel2,
  handleOpen,
  handleClose,
}) => (
  <nav>
    {
      isOpenLevel1 &&
      <OffCanvas className="navLevel1" isOpen={isOpenLevel1} level={1}>
        <NavList items={navItems} handleRoute={handleRoute} activeItem={activeNavItem} />
        <button onClick={handleClose}>Close Navigation</button>
      </OffCanvas>
    }
    {
      (isOpenLevel2 && !_.isEmpty(subNavItems)) &&
      <OffCanvas className="navLevel2" isOpen={isOpenLevel2} level={2}>
        <NavList items={subNavItems} handleRoute={handleSubRoute} activeItem={activeSubNavItem} />
      </OffCanvas>
    }

    <button onClick={handleOpen}>Open Navigation</button>
  </nav>
);

Navigation.propTypes = {
  navItems: PropTypes.array.isRequired,
  subNavItems: PropTypes.array,
  handleRoute: PropTypes.func.isRequired,
  handleSubRoute: PropTypes.func.isRequired,
  activeNavItem: PropTypes.string,
  activeSubNavItem: PropTypes.string,
  isOpenLevel1: PropTypes.bool,
  isOpenLevel2: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Navigation;
