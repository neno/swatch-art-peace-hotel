import styled from 'styled-components';
import { media } from '../../style-utils';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  
  .slick-arrow {
    position: absolute;
    z-index: 20;
    // height: 50px;
    width: 50px;
    top: 50%;
    margin-top: -7px;
    padding: 0;
    transform: rotate(-90deg) translateY(-50%);
    font-size: 0;
    text-align: center;
    
     &:before {
      font-family: OpenSans;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: white;
    }
  }
  .slick-prev {
    left: 18px;
    
    &:before { content: 'Prev'; }
  }
  
  .slick-next {
    right: 15px;
    
    &:before { content: 'Next'; }
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
    bottom: 20px;
    right: 50%;
    z-index: 20;
    padding: 0;
    list-style: none;
    font-size: 0;
    text-align: center;
    transform: translateX(50%);
  }
  
  .slick-dots li {
    display: inline-block;
  }
  
  .slick-dots li + li {
    margin-left: 10px;
  }
  
  .slick-dots button {
    height: 10px;
    width: 10px;
    padding: 0;
    border-radius: 50%;
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
  
  ${media.tablet`
    .slick-dots {
      top: 50%;
      bottom: auto;
      right: 32px;
      text-align: center;
      transform: rotate(-90deg) translateX(50%);
      transform-origin: right center;
    }
    
    .slick-dots li + li {
      margin-left: 2px;
    }
    
    .slick-dots button {
      height: 8px;
      width: 101px;
      border-radius: 0;
    }
  `}
`;

export default Wrapper;
