// Import libraries
import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Import components
import HeaderPage from "../components/HeaderPage";
import RowElement from "../components/RepoRow";
import Spinner from "../components/UI/Spinner";

import { getReposByUrl } from "../store/actions/reposActions";

// Styles
const RepoContent = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

// Interface
interface IProps {}

// Component
const Repos: React.FC<IProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const repos: IReposState = useSelector((state: IStore) => state.repos);
  const users: IUsersState = useSelector((state: IStore) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getReposByUrl(users.data?.repos_url!));
    };
    fetchData();
  }, []);

  const onGoBackActionHandler = () => {
    history.push("/");
  };

  let elements;
  if (repos && repos.data) {
    elements = (
      <>
        <HeaderPage
          title={`${repos.data.length} repositorios`}
          isUser={false}
          $isHome={false}
          onGoBackActionHandler={onGoBackActionHandler}
        />
        <RepoContent>
          <ul>
            {repos.data.map((repo) => (
              <RowElement
                repoName={repo.name}
                stars={repo.stargazers_count}
                description={repo.description}
                repoUrl={repo.url}
                key={repo.name}
              />
            ))}
          </ul>
        </RepoContent>
      </>
    );
  } else {
    elements = <Spinner withWrapper />;
  }

  return elements;
};

export default Repos;
