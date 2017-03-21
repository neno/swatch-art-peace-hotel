/**
 *
 * ScrollToWrapper
 *
 */

import styled from 'styled-components';
import { media } from '../../style-utils';

const ScrollToWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  z-index: 200;
  margin-left: -30px;
  
  ${media.tablet`
    bottom: 37px;
  `}
`;

export default ScrollToWrapper;
