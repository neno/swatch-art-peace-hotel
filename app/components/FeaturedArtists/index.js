/**
*
* FeaturedArtists
*
*/

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import SliderWrapper from './SliderWrapper';
import Arrow from './Arrow';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Constrained from '../Constrained';
import Button from '../Button';
import arrowPrev from '../../img/arrow-prev.svg';
import arrowNext from '../../img/arrow-next.svg';
import config from '../../config';

const artists = [
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
  {
    image: 'https://placehold.it/250X250',
    name: 'Paul Hansen Germany',
  },
];

const prevButton = <Arrow {...this.props}><img src={arrowPrev} alt={'prev'} /></Arrow>;
const nextButton = <Arrow {...this.props}><img src={arrowNext} alt={'next'} /></Arrow>;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: prevButton,
  nextArrow: nextButton,
  responsive: [
    {
      breakpoint: config.breakpointBoundaries.tabletLandscapeUpperBoundary,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: config.breakpointBoundaries.tabletPortraitUpperBoundary,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: config.breakpointBoundaries.phoneUpperBoundary,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
      <Button>
        Apply Now!
      </Button>
    </Constrained>
  </Section>
);


export default FeaturedArtists;
