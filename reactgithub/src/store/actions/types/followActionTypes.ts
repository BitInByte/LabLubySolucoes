import { followTypes } from "../actionTypes";

export type followStartAction = {
  type: followTypes.FOLLOW_START;
};

export type followErrorAction = {
  type: followTypes.FOLLOW_ERROR;
  payload: string;
};

export type followSuccessAction = {
  type: followTypes.FOLLOW_SUCCESS;
};

type followAction = followStartAction | followErrorAction | followSuccessAction;

export default followAction;
