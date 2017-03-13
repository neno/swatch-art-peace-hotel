import React, { PropTypes } from 'react';
import Ul from './Ul';
import NavItem from './NavItem';

const NavList = ({ navItems, handleRoute }) => (
  <Ul>
    {
      navItems.map((item) => <NavItem key={item.id} item={item} handleRoute={handleRoute} />)
    }
  </Ul>
);

NavList.propTypes = {
  navItems: PropTypes.array.isRequired,
  handleRoute: PropTypes.func.isRequired,
};

export default NavList;
