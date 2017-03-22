import styled from 'styled-components';
import { media } from '../../style-utils';

const Inner = styled.div`
  position: relative;
  max-width: 1383px;
  padding: 0 30px;
  margin: 0 auto;
  
  ${media.tabletLandscape`
    padding: 0 80px 0 135px;
  `}
`;

export default Inner;
