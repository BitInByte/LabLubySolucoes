// Import libraries
import React from "react";
import styled from "styled-components";

// Import components
import HeaderPage from "../components/HeaderPage";
import RowElement from "../components/RepoRow";

// Styles
const RepoContent = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

// Interface
interface IProps {}

// Component
const Repos: React.FC<IProps> = () => {
  return (
    <>
      <HeaderPage title="Title" isUser={false} isHome={false} />
      <RepoContent>
        <ul>
          <RowElement repoName="Example" />
          <RowElement repoName="Example" />
          <RowElement repoName="Example" />
          <RowElement repoName="Example" />
          <RowElement repoName="Example" />
        </ul>
      </RepoContent>
    </>
  );
};

export default Repos;
