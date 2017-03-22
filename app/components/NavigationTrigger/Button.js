import styled from 'styled-components';
import { media } from '../../style-utils';

const Button = styled.button`
  position: absolute;
  top: 22px
  left: 24px;
  padding: 0;
  display: flex;
  padding: 0;
  font-family: 'WorkSans', sans-serif;
  font-size: 0;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 40px;
  outline: none;
  cursor: pointer;
  
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    
  }
  
  img {
    transition: all .2s ease-in-out;
    &:hover { transform: scale(1.2); }
  }
  
  ${media.tabletLandscape`
    font-size: 14px;
  
    i { margin-right: 12px; }
  `}
`;

export default Button;
