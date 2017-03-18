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

function Features({ features }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <Wrapper>
      <Slider {...settings}>
        { slides }
      </Slider>
    </Wrapper>
  );
}

Features.propTypes = {
  features: PropTypes.array,
};

export default Features;
