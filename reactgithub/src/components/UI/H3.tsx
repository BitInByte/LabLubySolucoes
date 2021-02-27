// Import libraries
import React from "react";
import styled from "styled-components";

// Import components

// Styles
const H3Element = styled.h3`
  font-size: ${(props) => props.theme.sizes.h3};
  position: relative;
  top: 0;
  left: 0;
  padding-left: 2rem;

  &::before {
    content: "";
    display: block;
    background-color: ${(props) => props.theme.colors.yellow};
    width: 1rem;
    height: 135%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 0 0.8rem 0.8rem 0;
  }
`;

// Interface
interface IProps {}

// Component
const H3: React.FC<IProps> = ({ children }) => (
  <H3Element>{children}</H3Element>
);

export default H3;
