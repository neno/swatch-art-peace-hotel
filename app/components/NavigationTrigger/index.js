/**
*
* NavigationTrigger
*
*/

import React, { PropTypes } from 'react';
import Button from './Button';
import close from '../../img/close.svg';
import menu from '../../img/menu.svg';


const NavigationTrigger = ({ toggleNav, isNavOpen }) => (
  <Button onClick={toggleNav}>
    <i>
      <img src={isNavOpen ? close : menu} alt="Close icon" />
    </i>
    Menu
  </Button>
);

NavigationTrigger.propTypes = {
  isNavOpen: PropTypes.bool,
  toggleNav: PropTypes.func.isRequired,
};

export default NavigationTrigger;
