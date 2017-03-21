/**
*
* PageTitle
*
*/

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

const PageTitle = ({ title, description }) => (
  <Helmet
    title={title}
    titleTemplate={`%s - ${config.appName}`}
    meta={[{
      name: 'description',
      content: description,
    }]}
  />
);

PageTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PageTitle;
