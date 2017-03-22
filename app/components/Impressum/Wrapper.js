import styled from 'styled-components';
import { media } from '../../style-utils';

const Wrapper = styled.div`
  max-width: 100%;
  padding: 2rem 0;
  margin: 0 auto;
  
  ${media.tablet`
    max-width: 600px;
    min-height: 600px;
    padding: 4rem 0;
  `}
`;

export default Wrapper;
