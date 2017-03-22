/**
*
* SearchTrigger
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Overlay from '../Overlay';
import search from '../../img/search.svg';
import close from '../../img/close.svg';
import SearchCategoriesContainer from '../../containers/SearchCategoriesContainer';
import SearchRandomContainer from '../../containers/SearchRandomContainer';
import SearchForm from '../SearchForm';
import ApplyNow from '../ApplyNow';

const SearchTrigger = ({ toggleSearch, isSearchOpen }) => {
  const Centered = styled.div`
    text-align: center;
  `;

  const Image = styled.img`
    transition: all .2s ease-in-out;
    &:hover { transform: scale(1.2); }
  `;

  const trigger = (
    <Button>
      <i>
        <Image src={isSearchOpen ? close : search} alt="Close icon" />
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
      <SearchForm />
      <SearchCategoriesContainer />
      <SearchRandomContainer />
      <Centered>
        <ApplyNow />
      </Centered>
    </Overlay>
  );
};

SearchTrigger.propTypes = {
  isSearchOpen: PropTypes.bool,
  toggleSearch: PropTypes.func.isRequired,
};

export default SearchTrigger;
