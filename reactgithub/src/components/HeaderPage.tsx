// Import libraries
import React from "react";
import styled from "styled-components";
import { IoMdExit, AiOutlineArrowLeft } from "react-icons/all";

// Import components

// Styles
interface IHeaderPageElement {
  avatarUrl?: string;
}

const HeaderPageElement = styled.div<IHeaderPageElement>`
  width: 100%;
  background-color: ${(props) => props.theme.colors.headerPage};
  padding-bottom: ${(props) =>
    props.avatarUrl ? props.theme.sizes.avatar / 2 : 0}rem;
`;

const RowElement = styled.div`
  width: 100%;
  display: flex;
  color: ${(props) => props.theme.colors.white};
  font-family: inherit;
  font-size: inherit;
  padding: 1.5rem 2rem;

  & p {
    flex: 1;
    font-weight: 700;
    margin: auto;
    text-align: left;
  }

  & p:nth-child(2) {
    text-align: center;
  }

  & button {
    color: inherit;
    text-align: left;
  }
`;

const ActionElement = styled.button`
  flex: 1;
  color: ${(props) => props.theme.colors.white};
  text-align: right;
  font-size: inherit;
  font-family: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

interface IActionIcon {
  isHome: boolean;
}

const ActionIcon = styled(IoMdExit)<IActionIcon>`
  color: ${(props) =>
    props.isHome ? props.theme.colors.red : props.theme.colors.green};
  margin-left: 0.6rem;
  font-size: 3rem;
`;

const GoBackIcon = styled(AiOutlineArrowLeft)`
  font-weight: 700;
  font-size: 3rem;
`;

const AvatarElement = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: ${(props) => props.theme.sizes.avatar}rem;
    height: ${(props) => props.theme.sizes.avatar}rem;
    border-radius: 50%;
    object-fit: cover;
    border: solid 0.3rem ${(props) => props.theme.colors.white};
    transform: translateY(50%);
    position: absolute;
  }
`;

// Interface
interface IProps extends IActionIcon, IHeaderPageElement {
  title: string;
  isUser: boolean;
  onActionHandler?: () => void;
}

// Component
const HeaderPage: React.FC<IProps> = ({
  title,
  isHome,
  isUser,
  avatarUrl,
  onActionHandler,
}) => {
  console.log("isUser: ", isUser);
  console.log("Avatar: ", avatarUrl);

  return (
    <HeaderPageElement avatarUrl={avatarUrl}>
      <RowElement>
        {!isHome && (
          <button>
            <GoBackIcon />
          </button>
        )}
        <p>#{title}</p>
        {isUser && (
          <ActionElement onClick={onActionHandler}>
            {isHome ? "Sair" : "Salvar"}
            <ActionIcon isHome={isHome} />
          </ActionElement>
        )}
      </RowElement>
      {avatarUrl && (
        <AvatarElement>
          <img src={avatarUrl} />
        </AvatarElement>
      )}
    </HeaderPageElement>
  );
};

export default HeaderPage;
