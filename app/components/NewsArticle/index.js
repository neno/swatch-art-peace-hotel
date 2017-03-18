/**
*
* NewsArticle
*
*/

import React, { PropTypes } from 'react';
import H4 from '../H4';
import H2 from '../H2';
// import styled from 'styled-components';


const NewsArticle = ({ article }) => (
  <article>
    <H4>{article.date}</H4>
    <H2>{article.title}</H2>
    <p>{article.text}</p>
  </article>
);

NewsArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsArticle;
