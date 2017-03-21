import styled from 'styled-components';
import { media } from '../../style-utils';

const Wrapper = styled.p`
  margin: 0;
  font-family: 'TenorSans', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  
  ${media.tablet`
    font-size: 30px;
  `}
`;

export default Wrapper;
