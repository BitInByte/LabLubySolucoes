import actionTypes from "../actionTypes";
import User, { getUserByUsernameBodyPromise } from "../../../models/User";

export type userStartAction = {
  type: actionTypes.USER_START;
};

export type userSuccessAction = {
  type: actionTypes.USER_SUCCESS;
  payload: getUserByUsernameBodyPromise;
};

export type userErrorAction = {
  type: actionTypes.USER_ERROR;
  payload: string;
};

export type userFinishAction = {
  type: actionTypes.USER_FINISH;
};

type userAction =
  | userStartAction
  | userSuccessAction
  | userErrorAction
  | userFinishAction;

export default userAction;
