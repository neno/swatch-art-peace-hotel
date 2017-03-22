/**
 *
 * SectionTitle
 *
 */

import styled from 'styled-components';
import { media } from '../../style-utils';

const SectionTitle = styled.h2`
  margin: 0 0 20px;
  font-family: 'TenorSans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: #7c5e3c;
  text-transform: lowercase;
  
  ${media.tablet`
    margin: 0 0 40px;
    font-size: 45px;
  `}
  
`;

export default SectionTitle;
