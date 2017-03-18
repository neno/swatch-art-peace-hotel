/**
*
* News
*
*/

import React, { PropTypes } from 'react';
import NewsArticle from '../NewsArticle';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Constrained from '../Constrained';
import Wrapper from './Wrapper';
import Column from './Column';

const FeaturedNews = ({ news, title }) => {
  const half = Math.ceil(news.length / 2);
  return (
    <Section>
      <Constrained>
        <SectionTitle>{title}</SectionTitle>
        <Wrapper>
          <Column>
            {
              news.slice(0, half).map((article, i) => <NewsArticle key={i} article={article} />)
            }
          </Column>
          <Column>
            {
              news.slice(half, news.length).map((article, i) => <NewsArticle key={i} article={article} />)
            }
          </Column>
        </Wrapper>
      </Constrained>
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
