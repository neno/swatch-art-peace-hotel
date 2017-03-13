import React, { PropTypes } from 'react';
import _ from 'lodash';
import A from './A';
import NavList from './NavList';

const NavItem = ({ item, handleRoute }) => (
  <li>
    <A href={item.path} onClick={handleRoute}>
      {item.title}
    </A>
    {
      !_.isEmpty(item.children) && <NavList navItems={_.sortBy(item.children, 'sort')} handleRoute={handleRoute} />
    }
  </li>
);

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRoute: PropTypes.func.isRequired,
};

export default NavItem;
