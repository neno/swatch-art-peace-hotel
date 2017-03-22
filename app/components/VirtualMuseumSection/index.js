/**
*
* VirtualMuseumSection
*
*/

import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { media } from '../../style-utils';
import Section from '../Section';
import Constrained from '../Constrained';
import SectionTitle from '../SectionTitle';
import FlexBox from '../FlexBox';
import Image from '../Image';


function VirtualMuseumSection() {
  const Left = styled.div`
    margin-bottom: 20px;
    min-width: calc(50% - 10px);
    img {
      width: 100%;
    }
  
    ${media.tablet`
      margin-right: 10px;
    `}

  `;

  const Right = styled.div`
    min-width: calc(50% - 10px);
    img {
      width: 100%;
    }
  
    ${media.tablet`
      margin-left: 10px;
    `}
  `;

  return (
    <Section>
      <Constrained>
        <SectionTitle>Virtual Museum</SectionTitle>
      </Constrained>
      <FlexBox>
        <Left>
          <Link to="/virtual-museum-discover">
            <Image src="virtual-museum-section-discover.jpg" alt="Discover" />
          </Link>
        </Left>
        <Right>
          <Link to="/virtual-museum-meet-artists">
            <Image src="virtual-museum-section-meet.jpg" alt="Meet our artists" />
          </Link>
        </Right>
      </FlexBox>
    </Section>
  );
}

VirtualMuseumSection.propTypes = {

};

export default VirtualMuseumSection;
