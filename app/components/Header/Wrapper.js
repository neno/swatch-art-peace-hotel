import styled from 'styled-components';
import { media } from '../../style-utils';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 90px 14px;
  z-index: 9000;
  height: 80px;
  width: 100%;
  background: white;
  
  ${media.tabletLandscape`
    padding-left: 130px;
    padding-right: 130px;
  `}
`;

export default Wrapper;
