/**
*
* SearchTrigger
*
*/

import React, { PropTypes } from 'react';
import Button from './Button';
import Overlay from '../Overlay';
import search from '../../img/search.svg';
import close from '../../img/close.svg';

const SearchTrigger = ({ toggleSearch, isSearchOpen }) => {
  const trigger = (
    <Button>
      <i>
        <img src={isSearchOpen ? close : search} alt="Close icon" />
      </i>
    </Button>
  );

  return (
    <Overlay
      trigger={trigger}
      handleOpen={toggleSearch}
      handleClose={toggleSearch}
      buttonTitle={isSearchOpen ? 'Close search' : 'Open search'}
      isOpen={isSearchOpen}
    >
      <h1>
        This is the search!!!
      </h1>
    </Overlay>
  );
};

SearchTrigger.propTypes = {
  isSearchOpen: PropTypes.bool,
  toggleSearch: PropTypes.func.isRequired,
};

export default SearchTrigger;
