/**
*
* ArtistInfo
*
*/

import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';
import Thumb from './Thumb';
import Image from '../Image';
import H2 from '../H2';

const ArtistInfo = ({ artist, title }) => (
  <Wrapper>
    <H2>
      {artist.name}
    </H2>
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
