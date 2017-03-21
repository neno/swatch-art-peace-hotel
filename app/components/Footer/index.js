/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import LinkList from './LinkList';
import SocialLinks from '../SocialLinks';
import { media } from '../../style-utils';


function Footer() {
  const FooterWrapper = styled.footer`
    width: 100%;
    margin-top: 90px;
  `;

  const Wrapper = styled.div`
    width: 100%;
    border-top: solid 1px #7c5e3b;
  `;

  const Inner = styled.div`
    margin: auto;
    padding: 23px 20px 20px;
    max-width: 1420px;
    text-align: center;
    
    ${media.desktop`
      padding-left: 90px;
      padding-right: 90px;
    `}

    ${media.desktop`
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    `}
  `;

  const Copyright = styled.p`
  
    span {
      font-size: 0;
      display: block;
      margin-top: 5px;
    }
    
    margin: 0;
    font-family: 'WorkSans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #ac7e49;
    
    ${media.tablet`
      span {
        display: inline;
        margin: 0;
        font-size: 14px;
      }
    `}
  `;

  return (
    <FooterWrapper>
      <Wrapper>
        <Inner>
          <SocialLinks />
        </Inner>
      </Wrapper>
      <Wrapper>
        <Inner>
          <LinkList />
          <Copyright>The Swatch Art Peace Hotel <span>|</span> © 2017 The Swatch Group Ltd</Copyright>
        </Inner>
      </Wrapper>
    </FooterWrapper>
  );
}

export default Footer;
