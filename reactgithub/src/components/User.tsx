// Import libraries
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
`;

const NumberColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  padding: 1rem;
  color: inherit;
  font-size: inherit;

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
      />
      <UserContent>
        <H2>{name}</H2>
        <p>{email}</p>
        <p>{location}</p>
      </UserContent>
      <NumberRow>
        <NumberColumn>
          <p>{followers}</p>
          <p>Seguidores</p>
        </NumberColumn>
        <NumberColumn>
          <p>{following}</p>
          <p>Seguindo</p>
        </NumberColumn>
        <NumberColumn>
          <p>{repos}</p>
          <p>Repos</p>
        </NumberColumn>
      </NumberRow>
      <UserContent>
        <H2>Bio</H2>
        <p>{bio}</p>
      </UserContent>
    </>
  );
};

export default User;
