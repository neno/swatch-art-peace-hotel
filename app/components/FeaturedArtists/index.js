/**
*
* FeaturedArtists
*
*/

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import SliderWrapper from './SliderWrapper';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Constrained from '../Constrained';

const artists = [
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
  {
    image: 'https://placehold.it/190X190',
    name: 'Some Artist Name',
  },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
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
      <SectionTitle>Artist in residence</SectionTitle>
      <SliderWrapper>
        <Slider {...settings}>
          {slides}
        </Slider>
      </SliderWrapper>
    </Constrained>
  </Section>
);


export default FeaturedArtists;
