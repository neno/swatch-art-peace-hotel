import styled from 'styled-components';
import { media } from '../../style-utils';

const Button = styled.div`
  position: absolute;
  top: 22px;
  right: 5px;
  padding: 0;
  cursor: pointer;
  
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 10px;
  }
  
  ${media.tabletLandscape`
    right: 20px;
    
     i {
      padding: 0;
    }
  `}
`;

export default Button;
