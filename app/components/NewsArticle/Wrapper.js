import styled from 'styled-components';

const Wrapper = styled.article`
  max-width: 540px;
  
  & + & {
    margin-top: 63px;
  }
`;


export default Wrapper;
