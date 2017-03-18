/**
*
* Logo
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Logo() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
