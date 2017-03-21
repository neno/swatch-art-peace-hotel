/**
*
* ApplyNow
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const ApplyNow = ({ noMargin }) => {
  const Wrapper = styled.div`
    margin: 60px auto;
  `;

  return (
    noMargin ?
      <Button>
        Apply Now!
      </Button>
    :
      <Wrapper>
        <Button>
          Apply Now!
        </Button>
      </Wrapper>
  );
};

ApplyNow.propTypes = {
  noMargin: PropTypes.bool,
};

export default ApplyNow;
