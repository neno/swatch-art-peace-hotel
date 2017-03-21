import styled from 'styled-components';
import { media } from '../../style-utils';

const Column = styled.div`

  & + & { margin-top: 63px; }
  
  ${media.tablet`
    &:first-child{ padding-right: 50px; }
    &:last-child{ padding-left: 50px; }
    & + & { margin-top: 0;}
  `}
`;

export default Column;
