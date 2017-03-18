import React, { Children, PropTypes } from 'react';
import styled from 'styled-components';


const Detail = ({ children }) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
  `;

  return (
    <Wrapper>
      {Children.toArray(children)}
    </Wrapper>
  );
};

Detail.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Detail;
