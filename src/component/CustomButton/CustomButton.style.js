import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #fc9403;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: red;
    border: 1px solid red;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: red;
    color: white;
    border: none;
  }
`;



const getButtonStyles = props => {

    return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 30px;

  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
 
  justify-content: space-around;
  ${getButtonStyles}
`;