/**
 *
 * LinkList
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { media } from '../../style-utils';

function Footer() {
  const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 25px;
    font-size: 0;
    
    ${media.desktop`
      margin: 0;
    `}
  `;

  const ListItem = styled.li`
     display: block;
     margin: 1rem 0;
     
  
     ${media.tablet`
       display: inline-block;
       margin: 0;
       & + & { margin-left: 25px; }
    `}
    
    
  `;

  const FooterLink = styled(Link)`
    font-family: 'OpenSans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #000;
`;

  return (
    <Ul>
      <ListItem>
        <FooterLink to={'/impressum'}>
          Impressum
        </FooterLink>
      </ListItem>
      <ListItem>
        <FooterLink to={'/'}>
          Terms Of Use
        </FooterLink>
      </ListItem>
      <ListItem>
        <FooterLink to={'/'}>
          Privacy Policy
        </FooterLink>
      </ListItem>
      <ListItem>
        <FooterLink to={'/'}>
          Press information
        </FooterLink>
      </ListItem>
    </Ul>
  );
}

export default Footer;
