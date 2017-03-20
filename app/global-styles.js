import { injectGlobal } from 'styled-components';
import TenorSans from '../assets/fonts/Tenor_Sans/TenorSans-Regular.ttf';
import ArchivoBlack from '../assets/fonts/Archivo_Black/ArchivoBlack-Regular.ttf';
import WorkSansLight from '../assets/fonts/Work_Sans/WorkSans-Light.ttf';
import WorkSansRegular from '../assets/fonts/Work_Sans/WorkSans-Regular.ttf';
import WorkSansSemiBold from '../assets/fonts/Work_Sans/WorkSans-SemiBold.ttf';
import OpenSans from '../assets/fonts/Open_Sans/OpenSans-Regular.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'TenorSans';
    src: url(${TenorSans}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
   @font-face {
    font-family: 'ArchivoBlack';
    src: url(${ArchivoBlack}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'WorkSans';
    src: url(${WorkSansLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  
   @font-face {
    font-family: 'WorkSans';
    src: url(${WorkSansRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
   @font-face {
    font-family: 'WorkSans';
    src: url(${WorkSansSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSans}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'WorkSans', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.28;
    color: #000000;
  }
  
  button {
    cursor: pointer;
    outline: none;
  }

  // body.fontLoaded {
  //   font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  
  p {
    font-family: 'WorkSans', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.28;
    color: #000000;
   }

  // p,
  // label {
  //   font-family: Georgia, Times, 'Times New Roman', serif;
  //   line-height: 1.5em;
  // }
  
  a {
    &,
    &:active,
    &:hover {    
      color: inherit;
      text-decoration: inherit;
    }
  }
  
  img {
    max-width: 100%;
    vertical-align: bottom;
  }
  
  .ReactModal__Body--open {
    overflow-y: hidden;
  }
  
  .ReactModal__Body--open .ReactModal__Overlay {
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.9) !important;
    top: 80px !important;
  }
  
  .ReactModal__Body--open .ReactModal__Overlay .ReactModal__Content {
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    border: none !important;
    background-color: transparent !important;
  }
  
`;
