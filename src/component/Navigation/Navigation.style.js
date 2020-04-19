import styled, { css } from 'styled-components';


const Button = styled.button`
  display: inline-block;
  color: red;
  font-size: 1em;
 
  
 
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export default Button;

