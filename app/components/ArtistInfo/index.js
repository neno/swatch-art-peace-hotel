/**
*
* ArtistInfo
*
*/

import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';
import Thumb from './Thumb';
import Image from '../Image';
// import styled from 'styled-components';


const ArtistInfo = ({ name, imageSrc, dob, country, formOfArt, dateFrom, dateTo }) => (
  <Wrapper>
    <Thumb>
      <Image src={imageSrc} alt={name} />
    </Thumb>
    <div>
      {dob} | {country}
      <p>{formOfArt}</p>
      <p>{dateFrom}{dateTo}</p>
    </div>
  </Wrapper>
);

ArtistInfo.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  dob: PropTypes.string,
  country: PropTypes.string,
  formOfArt: PropTypes.string,
  dateFrom: PropTypes.string,
  dateTo: PropTypes.string,
};

export default ArtistInfo;
