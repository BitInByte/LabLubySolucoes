// Import libraries
import React from "react";
import styled from "styled-components";

// Import components
import Header from "../components/Header";

// Styles
const LayoutElement = styled.div`
  display: flex;
  flex-direction: column;
`;

// Interface
interface IProps {}

// Component
const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <LayoutElement>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </LayoutElement>
  );
};

export default Layout;
