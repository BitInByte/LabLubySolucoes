import React from "react";
import styled from "styled-components";
import Layout from "./hoc/Layout";
import Login from "./pages/Login";
//import './App.css';

const AppWrapper = styled.div`
  max-width: 100rem;
  //background-color: white;
  margin: 0 auto;
  height: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      {/*<Layout>*/}
      <Login />
      {/*</Layout>*/}
    </AppWrapper>
  );
};

export default App;
