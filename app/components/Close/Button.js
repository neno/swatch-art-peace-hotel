import styled from 'styled-components';
import { media } from '../../style-utils';

const Button = styled.button`
  z-index: 100;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 13px 0;
  outline: 0;
  appearance: none;
  
  ${media.tabletLandscape`
     top: 24px;
     right: 2px;
  `}
`;

export default Button;
