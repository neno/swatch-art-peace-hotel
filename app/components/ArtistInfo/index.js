/**
*
* ArtistInfo
*
*/

import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';
import Media from './Media';
import MediaThumb from './MediaThumb';
import MediaBody from './MediaBody';
import Image from '../Image';
import H2 from '../H2';
import StyledH4 from './StyledH4';

const ArtistInfo = ({ artist, title }) => (
  <Wrapper>
    <H2>
      {artist.name}
    </H2>
    <Media>
      <MediaThumb>
        <Image src={artist.profileImage} alt={artist.name} />
      </MediaThumb>
      <MediaBody>
        <p>
          {artist.born} | {artist.nationality}<br />
          {artist.inResidenceFrom}{artist.inResidenceTo}
        </p>
        <StyledH4>{title}</StyledH4>
      </MediaBody>
    </Media>
  </Wrapper>
);

ArtistInfo.propTypes = {
  artist: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default ArtistInfo;
