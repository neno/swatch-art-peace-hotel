/**
*
* SearchForm
*
*/

import React from 'react';
import styled from 'styled-components';
import FieldWrapper from './FieldWrapper';
import SearchInput from './SearchInput';
import searchIcon from '../../img/search.svg';

function SearchForm() {
  const Wrapper = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 2rem 0;
    max-width: 680px;
  `;

  const Submit = styled.button`
    position: absolute;
    z-index: 10;
    top: .5rem;
    right: 0;
    width: 20px;
    height: 20px;
    padding: 0;
  `;

  return (
    <Wrapper>
      <form action="#">
        <FieldWrapper>
          <SearchInput type="search" placeholder="Type to search our site" />
          <Submit>
            <img src={searchIcon} alt="Search icon" />
          </Submit>
        </FieldWrapper>
      </form>
    </Wrapper>
  );
}

SearchForm.propTypes = {

};

export default SearchForm;
