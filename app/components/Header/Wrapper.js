import styled from 'styled-components';
import { media } from '../../style-utils';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 60px 14px;
  z-index: 9050;
  height: 80px;
  width: 100%;
  background: #fafafa;
  
  max-width: 1440px;
  margin: 0 auto;
  border-bottom: 1px solid #7C5E3C;
  
  ${media.tabletLandscape`
    padding-left: 130px;
    padding-right: 130px;
  `}
`;

export default Wrapper;
