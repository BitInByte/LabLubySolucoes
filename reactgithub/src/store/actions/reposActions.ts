import { AppThunk } from "../types/thunk";

import actionTypes from "./actionTypes";
import {
  reposStartAction,
  reposErrorAction,
  reposSuccessAction,
} from "./types/reposActionTypes";

import Repos, { reposAttributes } from "../../models/Repos";

const reposStart = (): reposStartAction => {
  return {
    type: actionTypes.REPOS_START,
  };
};

const repoSuccess = (data: reposAttributes): reposSuccessAction => {
  return {
    type: actionTypes.REPOS_SUCCESS,
    payload: data,
  };
};

const repoError = (error: string): reposErrorAction => {
  return {
    type: actionTypes.REPOS_ERROR,
    payload: error,
  };
};

// Async actions
export const getReposByUrl = (url: string): AppThunk => {
  return async (dispatch) => {
    console.log("Dispatched");
    console.log("Repos URL: ", url);

    dispatch(reposStart());

    let response: reposAttributes | null;

    response = await Repos.getReposByUrl(url);
    if (!response) {
      return dispatch(repoError("Algo correu mal!"));
    }
    dispatch(repoSuccess(response!));
    console.log("Response: ", response);
  };
};
