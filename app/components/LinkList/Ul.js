import styled from 'styled-components';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  
  & > li {
    margin: .5rem 0;
  }
  
  a {
    transition: color: .4s ease;
    &:hover {
      color: #7c5e3c;
    }
  }
  
`;

export default Ul;
