import styled from 'styled-components';

const A = styled.a`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: #000;
  
  &:active,
  &:hover {
    color: brown;
  }
`;

export default A;
