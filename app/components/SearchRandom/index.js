/**
*
* SearchRandom
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import FlexBox from '../FlexBox';
import Section from './Section';
import H4 from '../H4';

const SearchRandom = ({ randomSearch }) => {
  const Wrapper = styled.div`
    max-width: 1042px;
    margin: 2rem auto;
    
    h4 {
      font-size: 18px;
      font-weight: normal;
    }
    
    section h4 {
      font-weight: normal;
    }
    
  `;
  const Centered = styled.div`
    text-align: center;
  `;


  return (
    <Wrapper>
      <Centered>
        <H4>You also might be interested in…</H4>
      </Centered>
      <FlexBox>
        {
          !_.isEmpty(randomSearch) &&
          randomSearch.map((category, i) => (
            <Section
              key={i}
              title={category.title}
              image={category.image}
            />
          ))
        }
      </FlexBox>
    </Wrapper>
  );
};

SearchRandom.propTypes = {
  randomSearch: PropTypes.array,
};

export default SearchRandom;
