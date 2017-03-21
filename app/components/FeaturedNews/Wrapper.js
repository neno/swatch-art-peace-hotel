import styled from 'styled-components';
import { media } from '../../style-utils';

const Wrapper = styled.div`

  
  ${media.tablet`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    padding: 12px 0 137px;
    
     &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 1px;
      height: 100%;
      background: #7c5e3b;
      transform: translateX(-50);
    }
  `}
`;

export default Wrapper;
