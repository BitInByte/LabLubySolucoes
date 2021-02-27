// Import libraries
import React from "react";
import styled from "styled-components";

// Import components

// Styles
const H2Element = styled.h2`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.sizes.h2};
  position: relative;
  top: 0;
  left: 0;
  padding-left: 2rem;

  &::before {
    content: "";
    display: block;
    background-color: ${(props) => props.theme.colors.yellow};
    width: 1rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0 0.8rem 0.8rem 0;
  }
`;

// Interface
interface IProps {}

// Component
const H2: React.FC<IProps> = ({ children }) => (
  <H2Element>{children}</H2Element>
);

export default H2;
