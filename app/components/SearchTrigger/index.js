/**
*
* SearchTrigger
*
*/

import React from 'react';
import Button from './Button';
import search from '../../img/search.svg';


const SearchTrigger = () => (
  <Button>
    <i>
      <img src={search} alt="Close icon" />
    </i>
  </Button>
);

SearchTrigger.propTypes = {

};

export default SearchTrigger;
