import { userTypes } from "./actionTypes";
import { AppThunk } from "../types/thunk";
import {
  userStartAction,
  userSuccessAction,
  userErrorAction,
} from "./types/userActionTypes";

import User, { getUserByUsernameBodyPromise } from "../../models/User";

const authStart = (): userStartAction => {
  return {
    type: userTypes.USER_START,
  };
};

const authSuccess = (user: getUserByUsernameBodyPromise): userSuccessAction => {
  return {
    type: userTypes.USER_SUCCESS,
    payload: user,
  };
};

const authError = (error: string): userErrorAction => {
  return {
    type: userTypes.USER_ERROR,
    payload: error,
  };
};

// Async actions
export const getUserByUsername = ({
  username,
}: getUserByUsernameBody): AppThunk => {
  return async (dispatch) => {
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
    addLocalStorageUserInformation(username);
    dispatch(authSuccess(newUser.getData()));
  };
};

//export const logout = () => {
//localStorage.removeItem("username");
//}

const addLocalStorageUserInformation = (username: string) => {
  localStorage.setItem("username", username);
};
