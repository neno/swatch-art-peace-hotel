/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';


function Footer() {
  const Wrapper = styled.footer`
    width: 100%;
    border-top: solid 1px #7c5e3b;
  `;

  const Inner = styled.div`
    margin: auto;
    padding: 10px 20px;
    max-width: 1280px;
  `;

  const Copyright = styled.p`
    font-family: 'WorkSans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #ac7e49;
  `;

  return (
    <Wrapper>
      <Inner>
        <Copyright>The Swatch Art Peace Hotel | © 2017 The Swatch Group Ltd</Copyright>
      </Inner>
    </Wrapper>
  );
}

export default Footer;
