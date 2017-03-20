/**
*
* LinkList
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Ul from './Ul';

const LinkList = ({ links }) => (
  <Ul>
    {
      links.map((link, i) => <li key={i}><Link style={{ textDecoration: 'underline' }} to="/">{link}</Link></li>)
    }
  </Ul>
);

LinkList.propTypes = {
  links: PropTypes.array.isRequired,
};

export default LinkList;
