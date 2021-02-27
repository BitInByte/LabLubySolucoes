import actionTypes from "../actionTypes";
import { reposAttributes } from "../../../models/Repos";

export type reposStartAction = {
  type: actionTypes.REPOS_START;
};

export type reposSuccessAction = {
  type: actionTypes.REPOS_SUCCESS;
  payload: reposAttributes;
};

export type reposErrorAction = {
  type: actionTypes.REPOS_ERROR;
  payload: string;
};

type reposAction = reposStartAction | reposSuccessAction | reposErrorAction;

export default reposAction;
