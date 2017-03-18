import styled from 'styled-components';
import { media } from '../../style-utils';

const Wrapper = styled.div`
  z-index: 10;
  position: relative;
  // height: 400px;
  flex: 1 100%;
  padding: 60px 10px 40px;
  // margin-top: -10px;
  // margin-bottom: -10px;
  background: white;
  border-top: 10px solid #999;
  border-bottom: 10px solid #999;
  
  ${media.tabletLandscape`
     padding: 40px;
  `}
`;

export default Wrapper;
