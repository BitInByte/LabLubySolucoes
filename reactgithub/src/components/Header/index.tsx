// Import libraries
import React from "react";
import styled from "styled-components";

// Import components

// Styles
const HeaderElement = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  margin-top: 2rem;
  border-radius: 0 0 2rem 2rem;
  padding: 2rem;

  @media ${(props) => props.theme.mediaQueries.small} {
    margin: 0;
    border-radius: 2rem 2rem 0 0;
    order: 1;
  }
`;

// Interface
interface IProps {}

// Component
const Header: React.FC<IProps> = () => {
  return <HeaderElement> header here </HeaderElement>;
};

export default Header;
