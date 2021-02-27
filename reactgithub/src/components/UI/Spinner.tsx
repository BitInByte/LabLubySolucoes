// Import libraries
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

// Import components

// Styles
const SpinnerElement = styled(CircularProgress)`
  && {
    width: 6rem !important;
    height: 6rem !important;
    color: ${(props) => props.theme.colors.yellow};
  }
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  padding: 20rem;
  text-align: center;
`;

// Interface
interface IProps {
  withWrapper?: boolean;
}

// Component
const Spinner: React.FC<IProps> = ({ withWrapper }) =>
  withWrapper ? (
    <SpinnerWrapper>
      <SpinnerElement />
    </SpinnerWrapper>
  ) : (
    <SpinnerElement />
  );

export default Spinner;
