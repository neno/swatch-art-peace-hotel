/**
*
* Section
*
*/

import styled from 'styled-components';
import { media } from '../../style-utils';

const Section = styled.section`
  position: relative;
  padding: 30px 0;
  
  &:first-child {
    padding-top: 60px;
  }
  
  ${media.tabletLandscape`
    padding: 60px 0;
  `}
  
`;

export default Section;
