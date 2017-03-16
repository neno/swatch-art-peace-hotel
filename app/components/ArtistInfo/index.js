/**
*
* ArtistInfo
*
*/

import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';
import Thumb from './Thumb';
import Image from '../Image';
import Title from './Title';

const ArtistInfo = ({ artist, title }) => (
  <Wrapper>
    <Title>
      {artist.name}
    </Title>
    <Thumb>
      <Image src={artist.profileImage} alt={artist.name} />
    </Thumb>
    <div>
      {artist.born} | {artist.nationality}
      <p>{artist.inResidenceFrom}{artist.inResidenceTo}</p>
      <p>{title}</p>
    </div>
  </Wrapper>
);

ArtistInfo.propTypes = {
  artist: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default ArtistInfo;
