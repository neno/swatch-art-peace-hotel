import React, { PropTypes } from 'react';

import _ from 'lodash';

import LinkList from '../LinkList';
import H4 from '../H4';
import LinksContainer from './LinksContainer';

const Section = ({ title, links }) => (
  <section>
    <H4>{title}</H4>
    {
      !_.isEmpty(links) &&
      <LinksContainer>
        <LinkList links={links} />
      </LinksContainer>
    }
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array,
};

export default Section;
