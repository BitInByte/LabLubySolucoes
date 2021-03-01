import actionTypes from "./actionTypes";
import { AppThunk } from "../types/thunk";
import {
  userStartAction,
  userSuccessAction,
  userErrorAction,
  userFinishAction,
} from "./types/userActionTypes";

import User, { userAttributes } from "../../models/User";

import { addLocalStorageUserInformation } from "../../utils/localStorage";

const authStart = (): userStartAction => {
  return {
    type: actionTypes.USER_START,
  };
};

const authSuccess = (user: userAttributes): userSuccessAction => {
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
    dispatch(authStart());
    const newUser = new User(username);
    const response: boolean = await newUser.getUserByUsername();
    if (!response) {
      dispatch(authClear());
      return;
    }
    if (isLogin) {
      addLocalStorageUserInformation(username);
    }
    dispatch(authSuccess(newUser.getData()));
  };
};
