import styled from 'styled-components';
import { media } from '../../style-utils';

const Wrapper = styled.div`
  z-index: 10;
  position: relative;
  flex: 1 100%;
  padding: 60px 10px 40px;
  background: #fafafa;
  border-top: 10px solid rgba(0, 0, 0, .5);
  border-bottom: 10px solid rgba(0, 0, 0, .5);
  
  ${media.tabletLandscape`
     padding: 40px;
  `}
`;

export default Wrapper;
