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
  
  .slick-dots {
    position: absolute;
    top: 50%;
    right: 32px;
    z-index: 20;
    list-style: none;
    font-size: 0;
    text-align: center;
    transform: rotate(-90deg) translateX(50%);
    transform-origin: right center;
  }
  
  .slick-dots li {
    display: inline-block;
  }
  
  .slick-dots li + li {
    margin-left: 2px;
  }
  
  .slick-dots button {
    height: 8px;
    width: 101px;
    font-size: 0;
    background-color: rgba(254,254,254, 0.3);
    transition: .3s background;
    
    &:hover, 
    &:active {
      background-color: rgba(254,254,254, 1);
    }
  }
  
  .slick-active button {
    background-color: rgba(254,254,254, 1);
  }
`;

export default SliderWrapper;
