// Import libraries
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { getUserByUsername } from "../store/actions/userActions";

import User from "../models/User";

// Import components
import Input from "./UI/Input";
import Button from "./UI/Button";
import Spinner from "./UI/Spinner";
import { userTypes } from "../store/actions/actionTypes";

// Styles
const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SpinnerElement = styled(Spinner)`
  && {
    width: 10rem !important;
    height: 10rem;
    color: ${(props) => props.theme.colors.yellow};
  }
`;

// Interface
interface IProps {}

// Component
const Auth: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const user: IUsersState = useSelector((state: IStore) => state.user);
  console.log(user);

  const onInputChange = (value: string) => {
    setUserInput((_) => value);
  };

  const onSubmithandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userInput.length <= 0) {
      dispatch({
        type: userTypes.USER_ERROR,
        payload: "Campo Obrigatorio",
      });
      return;
    }
    dispatch(getUserByUsername({ username: userInput }));
  };

  const element = user.loading ? (
    <Spinner />
  ) : (
    <Form onSubmit={onSubmithandler}>
      <Input
        placeholder="Usuário"
        value={userInput}
        onChangeHandler={onInputChange}
        label={user.error}
      />
      <Button>
        Entrar <AiOutlineArrowRight style={{ marginLeft: "1.5rem" }} />
      </Button>
    </Form>
  );

  return element;
};

export default Auth;
