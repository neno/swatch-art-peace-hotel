import styled, { css } from 'styled-components';

const prevPosition = css`
  left: 0;
`;

const nextPosition = css`
  right: 0;
`;


const Button = styled.button`
  z-index: 100;
  position: absolute;
  bottom: 0;
  ${(props) => props.skin === 'next' ? nextPosition : prevPosition}
  width: 50px;
  padding: 0;
  outline: 0;
  font-size: 50px;
  line-height: 1;
  color: #816444;
  appearance: none;
`;

export default Button;
