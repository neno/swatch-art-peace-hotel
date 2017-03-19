/**
*
* FeaturedArtists
*
*/

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import SliderWrapper from './SliderWrapper';
import Button from './Button';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Constrained from '../Constrained';
import arrowPrev from '../../img/arrow-prev.svg';
import arrowNext from '../../img/arrow-next.svg';

const artists = [
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Paul Hansen Germany',
  },
];

const prevButton = <Button {...this.props}><img src={arrowPrev} alt={'prev'} /></Button>;
const nextButton = <Button {...this.props}><img src={arrowNext} alt={'next'} /></Button>;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: prevButton,
  nextArrow: nextButton,
};

const slides = artists.map((artist, i) => (
  <Slide key={i} artist={artist}>
    <div>
      <p>{artist.name}</p>
    </div>
  </Slide>
));

const FeaturedArtists = () => (

  <Section>
    <Constrained>
      <SectionTitle>Artists in residence</SectionTitle>
      <SliderWrapper>
        <Slider {...settings}>
          {slides}
        </Slider>
      </SliderWrapper>
    </Constrained>
  </Section>
);


export default FeaturedArtists;
