import styled, { css } from 'styled-components';

const styledButton = css`
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyle = css`
  bottom: 0;
  opacity: 0.7;
  margin-bottom: 2rem;
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInButtonStyle = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInButtonStyle;
  }
  return props.inverted ? invertedButtonStyle : styledButton;
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
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
