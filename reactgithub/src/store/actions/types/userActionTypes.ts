import { userTypes } from "../actionTypes";
import User, { getUserByUsernameBodyPromise } from "../../../models/User";

export type userStartAction = {
  type: userTypes.USER_START;
};

export type userSuccessAction = {
  type: userTypes.USER_SUCCESS;
  //payload: User;
  payload: getUserByUsernameBodyPromise;
};

export type userErrorAction = {
  type: userTypes.USER_ERROR;
  payload: string;
};

export type userFinishAction = {
  type: userTypes.USER_FINISH;
};

type userAction =
  | userStartAction
  | userSuccessAction
  | userErrorAction
  | userFinishAction;

export default userAction;
