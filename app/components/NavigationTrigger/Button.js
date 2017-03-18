import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding: 0;
  font-family: WorkSans;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 40px;
  
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
