import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Image from '../Image';

const Section = ({ title, image }) => {
  const Wrapper = styled.section`
    width: 25%;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 1rem .5rem;
    
    img {
      display: inline-block;
      width: 100%;
      margin: .5rem 0;
    }
    
    h4 {
      margin: .5rem 0;
    }
  `;

  return (
    <Wrapper>
      <Image src={image} alt={title} />
      <h4><a href="/">{title}</a></h4>
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Section;
