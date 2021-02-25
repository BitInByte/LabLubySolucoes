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

// Interface
interface IProps {}

// Component
const Spinner: React.FC<IProps> = () => <SpinnerElement />;

export default Spinner;
