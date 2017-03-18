import styled from 'styled-components';
import { media } from '../../style-utils';

const DetailImageWrapper = styled.div`
  width: 100%;
  
  img {
    max-height: 80vh;
  }
  
  ${media.tabletLandscape`
    flex: 0 0 auto;
    width: 37.1036%;
    margin-right: 90px;
  `}
  
   ${media.desktop`
    margin-right: 130px;
  `}
`;

export default DetailImageWrapper;
