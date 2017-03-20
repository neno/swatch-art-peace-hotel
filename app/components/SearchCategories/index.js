/**
*
* SearchCategories
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import FlexBox from '../FlexBox';
import Section from './Section';
import H4 from '../H4';

const SearchCategories = ({ searchCategories }) => {
  const Wrapper = styled.div`
    width: 1042px;
    margin: 2rem auto;
  `;
  const Centered = styled.div`
    text-align: center;
  `;


  return (
    <Wrapper>
      <Centered>
        <H4>Explore our art works</H4>
      </Centered>
      <FlexBox>
        {
          !_.isEmpty(searchCategories) &&
          searchCategories.map((category, i) => <Section key={i} title={category.title} links={category.links} />)
        }
      </FlexBox>
    </Wrapper>
  );
};

SearchCategories.propTypes = {
  searchCategories: PropTypes.array,
};

export default SearchCategories;
