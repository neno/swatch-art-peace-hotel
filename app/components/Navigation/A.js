import styled from 'styled-components';

const A = styled.a`
  display: block;
  padding: 0 20px;
  font-family: WorkSans;
  font-size: 18px;
  line-height: 2.39;
  color: #000;
  text-decoration: inherit;
  
  &:first-letter {
    text-transform: uppercase;
  }
  
  &:active,
  &:hover {
    color: #ac7e49;
  }
`;

export default A;
