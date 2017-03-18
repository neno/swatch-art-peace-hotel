/**
*
* News
*
*/

import React, { PropTypes } from 'react';
import NewsArticle from '../NewsArticle';
import Section from './Section';
import Wrapper from './Wrapper';
import H2 from '../H2';

const FeaturedNews = ({ news, title }) => {
  const half = Math.ceil(news.length / 2);
  return (
    <Section>
      <H2>{title}</H2>
      <Wrapper>
        <div>
          {
            news.slice(0, half).map((article, i) => <NewsArticle key={i} article={article} />)
          }
        </div>
        <div>
          {
            news.slice(half, news.length).map((article, i) => <NewsArticle key={i} article={article} />)
          }
        </div>
      </Wrapper>
    </Section>
  );
};

FeaturedNews.propTypes = {
  news: PropTypes.array,
  title: PropTypes.string,
};

FeaturedNews.defaultProps = {
  title: 'News',
};

export default FeaturedNews;
