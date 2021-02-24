import React from 'react';
import styled from "styled-components";
import Layout from "./hoc/Layout";
import Login from "./pages/Login";
//import './App.css';

const AppWrapper = styled.div`
    width: 100rem;
  //background-color: white;
  margin: 0 auto;
  min-height: 100rem;
`;

const App = () => {
  return (
      <AppWrapper>
          {/*<Layout>*/}
        <Login />
          {/*</Layout>*/}
      </AppWrapper>
  );
}

export default App;
