import React, { PropTypes } from 'react';
import Ul from './Ul';
import NavItem from './NavItem';

const NavList = ({ items, handleRoute, activeItem }) => (
  <Ul>
    {
      items.map((item) => (
        <NavItem key={item.id} item={item} handleRoute={handleRoute} activeItem={activeItem} />
      ))
    }
  </Ul>
);

NavList.propTypes = {
  items: PropTypes.array.isRequired,
  handleRoute: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
};

export default NavList;
