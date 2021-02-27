import actionTypes from "../actionTypes";
import { followAttributes } from "../../../models/Follow";

export type followStartAction = {
  type: actionTypes.FOLLOW_START;
};

export type followErrorAction = {
  type: actionTypes.FOLLOW_ERROR;
  payload: string;
};

export type followSuccessAction = {
  //type:.FOLLOW_SUCCESS;
  type: actionTypes.FOLLOW_SUCCESS;
  payload: followAttributes;
};

export type followResetAction = {
  type: actionTypes.FOLLOW_RESET;
};

type followAction =
  | followStartAction
  | followErrorAction
  | followSuccessAction
  | followResetAction;

export default followAction;
