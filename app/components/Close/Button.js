import styled from 'styled-components';
import { media } from '../../style-utils';

const Button = styled.button`
  z-index: 100;
  width: 50px;
  height: 50px;
  position: absolute;
  top: -55px;
  right: -5px;
  padding: 13px 0;
  outline: 0;
  appearance: none;
  background-color: #fafafa;
  border-radius: 50px;
  transition: background-color .4s ease;
  
  &:hover {
    background-color: #C6C6C6;
  }
  
  ${media.tabletLandscape`
     top: 24px;
     right: 2px;
  `}
`;

export default Button;
