// Import libraries
import React from "react";
import styled from "styled-components";
import { BiStar, BiLockAlt, BiLockOpenAlt } from "react-icons/bi";

// Import components
import H3 from "./UI/H3";

// Styles
const UrlLink = styled.a`
  border-bottom: solid 0.05rem #434343;
  &:not(:last-child) {
    border-bottom: solid 0.05rem #434343;
  }
`;

const RowElement = styled.li`
  width: 100%;
  padding: 2.5rem 0;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & p {
    margin-top: 1rem;
    margin-left: 2rem;
    flex: 1;
  }
`;

const RepoInfoRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & p {
    display: flex;
    align-items: center;
    & svg {
      margin-right: 0.5rem;
    }
  }

  & p:last-child {
    flex: 1;
    text-align: right;
    justify-content: flex-end;
  }
`;

const StarIcon = styled(BiStar)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.yellow};
`;

const LockClose = styled(BiLockAlt)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.red};
`;

const LockOpen = styled(BiLockOpenAlt)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.green};
`;

// Interface
interface IProps {
  repoName: string;
  stars: number;
  description: string;
  repoUrl: string;
}

// Component
const RepoRow: React.FC<IProps> = ({
  repoName,
  stars,
  description,
  repoUrl,
}) => {
  return (
    <UrlLink href={repoUrl} target="_blank">
      <RowElement>
        <H3>{repoName}</H3>
        <p>{description}</p>
        <RepoInfoRow>
          <p>
            <StarIcon /> {stars}
          </p>
          <p>
            <LockOpen />
            <LockClose />
          </p>
        </RepoInfoRow>
      </RowElement>
    </UrlLink>
  );
};

export default RepoRow;
