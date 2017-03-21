import styled from 'styled-components';
import { media } from '../../style-utils';

const FlexBox = styled.div`
  ${media.tablet`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
  `}
`;

export default FlexBox;
