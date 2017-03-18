/**
*
* NewsArticle
*
*/

import React, { PropTypes } from 'react';
import Date from './Date';
import Title from './Title';
import Wrapper from './Wrapper';
import Summary from './Summary';
// import styled from 'styled-components';


const NewsArticle = ({ article }) => (
  <Wrapper>
    <Date>{article.date}</Date>
    <Title>{article.title}</Title>
    <Summary>{article.text}</Summary>
  </Wrapper>
);

NewsArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsArticle;
