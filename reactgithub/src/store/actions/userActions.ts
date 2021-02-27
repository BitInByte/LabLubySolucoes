import actionTypes from "./actionTypes";
import { AppThunk } from "../types/thunk";
import {
  userStartAction,
  userSuccessAction,
  userErrorAction,
  userFinishAction,
} from "./types/userActionTypes";

import User, { getUserByUsernameBodyPromise } from "../../models/User";

import { addLocalStorageUserInformation } from "../../utils/localStorage";

const authStart = (): userStartAction => {
  return {
    type: actionTypes.USER_START,
  };
};

const authSuccess = (user: getUserByUsernameBodyPromise): userSuccessAction => {
  return {
    type: actionTypes.USER_SUCCESS,
    payload: user,
  };
};

const authError = (error: string): userErrorAction => {
  return {
    type: actionTypes.USER_ERROR,
    payload: error,
  };
};

type getUserByUsernameBody = {
  username: string;
  isLogin: boolean;
};

const authClear = (): userFinishAction => {
  return {
    type: actionTypes.USER_FINISH,
  };
};

// Async actions
export const getUserByUsername = ({
  username,
  isLogin,
}: getUserByUsernameBody): AppThunk => {
  return async (dispatch) => {
    //dispatch(authClear());
    dispatch(authStart());
    console.log("Dispatched");
    console.log(username);
    const newUser = new User(username);
    const response: boolean = await newUser.getUserByUsername();
    if (!response) {
      dispatch(
        authError(
          "Ocorreu um erro! Verifique se o nome de utilizador esta correto!"
        )
      );
    }
    if (isLogin) {
      addLocalStorageUserInformation(username);
    }
    dispatch(authSuccess(newUser.getData()));
  };
};
