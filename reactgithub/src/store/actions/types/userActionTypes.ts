import { userTypes } from "../actionTypes";
import User from "../../../models/User";

export type userStartAction = {
  type: userTypes.USER_START;
};

export type userSuccessAction = {
  type: userTypes.USER_SUCCESS;
  payload: User;
};

export type userErrorAction = {
  type: userTypes.USER_ERROR;
  payload: string;
};

type userAction = userStartAction | userSuccessAction | userErrorAction;

export default userAction;
