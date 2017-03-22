import styled from 'styled-components';
import { media } from '../../style-utils';

const Article = styled.article`
  position: relative;
  display: table;
  width: 100%;
  
  height: 300px;
  
  ${media.tablet`
    height: 384px;
  `}
  
  ${media.tabletLandscape`
    height: 512px;
  `}
  
  ${media.desktop`
    height: 750px;
  `}
  
  overflow: hidden;
  
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  > div {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    padding: 0 20px 60px;
  }
  
  ${media.tablet`
    > div {
      padding: 0 80px 45px;
    }
  `}
`;

export default Article;
