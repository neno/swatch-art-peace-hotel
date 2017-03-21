import styled from 'styled-components';
import { media } from '../../style-utils';

const H2 = styled.h2`
  margin: 0;
  font-family: 'ArchivoBlack';
  font-size: 38px;
  font-weight: 400;
  text-transform: uppercase;
  color: white;
  
  ${media.tablet`
    font-size: 62px;
  `}
`;

export default H2;
