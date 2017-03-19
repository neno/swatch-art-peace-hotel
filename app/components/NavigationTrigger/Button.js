import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: 22px
  left: 24px;
  padding: 0;
  display: flex;
  padding: 0;
  font-family: 'WorkSans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 40px;
  outline: none;
  
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`;

export default Button;
