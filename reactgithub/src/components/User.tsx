// Import libraries
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import components
import HeaderPage from "./HeaderPage";
import H2 from "./UI/H2";

// Styles
const UserContent = styled.div`
  width: 100%;
  padding: 2rem 0;
  padding-top: ${(props) => props.theme.sizes.avatar / 2 + 4}rem;
  color: inherit;

  & p {
    padding-left: 2rem;
  }

  &:nth-child(4) {
    padding-top: 5rem;
  }
`;

const NumberRow = styled.div`
  width: 100%;
  margin-top: 2rem;
  background-color: ${(props) => props.theme.colors.numberInformation};
  display: flex;

  & a {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

const NumberColumn = styled.button`
  display: flex;
  flex-direction: column;
  //flex: 1;
  text-align: center;
  padding: 1rem;
  color: inherit;
  font-size: inherit;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & p:nth-child(1) {
    font-size: 4rem;
    font-weight: 700;
  }
`;

// Interface
interface IProps {
  isHome: boolean;
  name: string;
  bio: string;
  followers: number;
  following: number;
  repos: number;
  email: string;
  location: string;
  avatarUrl: string;
  login: string;
  onActionHandler: () => void;
  onGoBackActionHandler?: () => void;
}

// Component
const User: React.FC<IProps> = ({
  isHome = false,
  name,
  bio,
  followers,
  following,
  repos,
  email,
  location,
  avatarUrl,
  login,
  onActionHandler,
  onGoBackActionHandler,
}) => {
  //const user: IUsersState = useSelector((state: IStore) => state.user);
  return (
    <>
      <HeaderPage
        //title={name.split(" ").join(".")}
        title={login}
        isHome={isHome}
        isUser
        avatarUrl={avatarUrl}
        onActionHandler={onActionHandler}
        onGoBackActionHandler={onGoBackActionHandler}
      />
      <UserContent>
        <H2>{name}</H2>
        <p>{email}</p>
        <p>{location}</p>
      </UserContent>
      <NumberRow>
        <Link to="/followers">
          <NumberColumn>
            <p>{followers}</p>
            <p>Seguidores</p>
          </NumberColumn>
        </Link>
        <Link to="/following">
          <NumberColumn>
            <p>{following}</p>
            <p>Seguindo</p>
          </NumberColumn>
        </Link>
        <Link to="/repos">
          <NumberColumn>
            <p>{repos}</p>
            <p>Repos</p>
          </NumberColumn>
        </Link>
      </NumberRow>
      <UserContent>
        <H2>Bio</H2>
        <p>{bio}</p>
      </UserContent>
    </>
  );
};

export default User;
