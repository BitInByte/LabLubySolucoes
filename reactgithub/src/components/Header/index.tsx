// Import libraries
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiGithub, FiHome, BsPeople } from "react-icons/all";

// Import components

// Styles
const HeaderElement = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  margin-top: 2rem;
  border-radius: 0 0 2rem 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  z-index: 1;

  @media ${(props) => props.theme.mediaQueries.small} {
    margin: 0;
    border-radius: 2rem 2rem 0 0;
    order: 1;
    position: fixed;
    left: 0;
    bottom: 0;
  }
`;

const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.navLinkNotSelected};
  font-weight: 700;
  transition: all 0.2s ease-in;
  margin: 0 1rem;
  font-size: 1.45rem;

  & svg {
    font-size: 2.8rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.navLinkSelected};
  }

  &.active {
    color: ${(props) => props.theme.colors.navLinkSelected};
  }
`;

// Interface
interface IProps {}

// Component
const Header: React.FC<IProps> = () => {
  return (
    <HeaderElement>
      <Link to="/" exact>
        <FiHome />
        <p>Home</p>
      </Link>
      <Link to="/repos">
        <FiGithub />
        <p>Repos</p>
      </Link>
      <Link to="/followers" exact>
        <BsPeople />
        <p>Seguidores</p>
      </Link>
      <Link to="/following" exact>
        <BsPeople />
        <p>Seguindo</p>
      </Link>
    </HeaderElement>
  );
};

export default Header;
