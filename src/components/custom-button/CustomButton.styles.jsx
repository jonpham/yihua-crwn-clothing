import styled from "@emotion/styled";
import { css } from "@emotion/core";

const PrimaryButtonStyle = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const SecondaryButtonStyle = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    color: black;
    border: none;
  }
`;

const InvertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyle = ({ type }) => {
  switch(type) {
    case 'secondary':
      return SecondaryButtonStyle;
    case 'inverted':
      return InvertedButtonStyle;
    default:
      return PrimaryButtonStyle;
  }
};

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;

  ${getButtonStyle}
`;
