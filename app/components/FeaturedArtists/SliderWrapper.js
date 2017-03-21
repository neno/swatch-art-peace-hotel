import styled from 'styled-components';
import { media } from '../../style-utils';

const SliderWrapper = styled.div`
  position: relative;
  padding: 27px 60px 50px;
  
  ${media.tablet`
    padding-left: 60px;
    padding-left: 60px;
  `} 

  
  .slick-list {
    padding-top: 20px; 
    overflow: hidden;
  }
  
  .slick-arrow {
    position: absolute;
    z-index: 20;
    // height: 50px;
    width: 50px;
    top: 50%;
    padding: 0;
    font-size: 0;
    text-align: center;
    transform: translateY(-50%);
    
     &:before {
      font-family: OpenSans;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: black;
    }
  }
  .slick-prev {
    left: -12px;
  }
  
  .slick-next {
    right: -12px;}
  }
  
  .slick-list {
    position: relative;
    z-index: 10;
  }
  
  .slick-track {
    display: flex;
    width: 100%;
  }
`;

export default SliderWrapper;
