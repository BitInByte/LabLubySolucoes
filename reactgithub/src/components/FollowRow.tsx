// Import libraries
import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

// Import components

// Styles
const RowElement = styled.li`
  width: 100%;
  padding: 2.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    margin-left: 3rem;
    font-weight: 700;
    flex: 1;
  }

  &::before {
    content: "";
    display: block;
    background-color: ${(props) => props.theme.colors.yellow};
    width: 1rem;
    height: 30%;
    position: absolute;
    top: 50%;
    left: 0;
    border-radius: 0 0.8rem 0.8rem 0;
    transform: translateY(-50%);
  }
`;

const AvatarElement = styled.figure`
  & img {
    width: ${(props) => props.theme.sizes.avatar / 2}rem;
    height: ${(props) => props.theme.sizes.avatar / 2}rem;
    border-radius: 50%;
    object-fit: cover;
    border: solid 0.3rem ${(props) => props.theme.colors.white};
    //transform: translateY(50%);
  }
`;

const GoIcon = styled(AiOutlineArrowRight)`
  font-weight: 700;
  font-size: 3rem;
`;

// Interface
interface IProps {
  avatarUrl: string;
  username: string;
}

// Component
const FollowRow: React.FC<IProps> = ({ avatarUrl, username }) => {
  return (
    <RowElement>
      <AvatarElement>
        <img src={avatarUrl} alt="User Avatar" />
      </AvatarElement>
      <p>#{username}</p>
      <GoIcon />
    </RowElement>
  );
};

export default FollowRow;
