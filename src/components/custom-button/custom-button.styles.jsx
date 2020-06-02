import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #0F4B88;
  color: #5cdb95;
  border: none;
  font-weight:900;
  border-radius : 1.3rem;
  outline:none; 
  box-shadow : 1px 2px 5px 5px #5cdb95;
  &:hover {
    background-color: #5cdb95;
    color: #0F4B88;
    border: 1px solid black;
    box-shadow : 1px 2px 5px 5px #0f4b88;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
