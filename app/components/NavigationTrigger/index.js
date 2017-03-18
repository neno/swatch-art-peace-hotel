/**
*
* NavigationTrigger
*
*/

import React, { PropTypes } from 'react';
import Button from './Button';
import close from '../../img/close.svg';
import menu from '../../img/menu.svg';


const NavigationTrigger = ({ isNavActive }) => (
  <Button>
    <i>
      <img src={isNavActive ? close : menu} alt="Close icon" />
    </i>
    Menu
  </Button>
);

NavigationTrigger.propTypes = {
  isNavActive: PropTypes.bool.isRequired,
};

export default NavigationTrigger;
