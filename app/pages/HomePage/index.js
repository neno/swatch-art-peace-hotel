/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PageTitle from '../../components/PageTitle';
import FeaturesContainer from '../../containers/FeaturesContainer';
import NewsContainer from '../../containers/NewsContainer';
import FeaturedNews from '../../components/FeaturedNews';
import NavigationContainer from '../../containers/NavigationContainer';
import config from '../../config';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, description } = config.pages.HomePage;

    return (
      <div>
        <PageTitle title={title} description={description} />
        <FeaturesContainer />
        <NewsContainer>
          <FeaturedNews />
        </NewsContainer>
        <NavigationContainer />
      </div>
    );
  }
}
