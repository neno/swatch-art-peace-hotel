import styled from 'styled-components';

const Wrapper = styled.article`
  max-width: 540px;
  
  &:hover h3,
  &:hover p {
    color: #7C5E3C;
  }
  
  & + & {
    margin-top: 63px;
  }
`;


export default Wrapper;
