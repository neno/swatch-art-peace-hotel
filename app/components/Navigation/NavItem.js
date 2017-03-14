import React, { PropTypes } from 'react';
import A from './A';

const NavItem = ({ item, handleRoute }) => (
  <li>
    <A href={item.path} onClick={(e) => handleRoute(e, item)}>
      {item.title}
    </A>
  </li>
);

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRoute: PropTypes.func.isRequired,
};

export default NavItem;
