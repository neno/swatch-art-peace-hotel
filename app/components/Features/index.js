/**
*
* Features
*
*/

import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import Wrapper from './Wrapper';
import Slide from './Slide';
import H2 from './H2';
import P from './P';
import ScrollToWrapper from './ScrollToWrapper';
import ScrollTo from '../ScrollTo';
import config from '../../config';

function Features({ features }) {
  const settings = {
    infinite: true,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: config.breakpointBoundaries.phoneUpperBoundary,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const slides = features.map((feature, i) => (
    <Slide key={i} style={{ backgroundImage: `url(img/${feature.image})` }}>
      <div>
        <H2>{feature.title}</H2>
        <P>{feature.text}</P>
      </div>
    </Slide>
  ));

  return (
    <Wrapper isMobile>
      <Slider {...settings}>
        { slides }
      </Slider>
      <ScrollToWrapper>
        <ScrollTo to={'featuredNews'} offset={-50} />
      </ScrollToWrapper>
    </Wrapper>
  );
}

Features.propTypes = {
  features: PropTypes.array,
};

export default Features;
