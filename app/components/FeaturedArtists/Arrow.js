import styled from 'styled-components';

const Button = styled.button`
  z-index: 100;
  position: absolute;
  bottom: 0;
  ${(props) => props.skin === 'next' ? 'right' : 'left'}: 0;
  width: 50px;
  padding: 0;
  outline: 0;
  appearance: none;
`;

export default Button;
