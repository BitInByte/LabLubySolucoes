import { AppThunk } from "../types/thunk";
import actionTypes from "./actionTypes";
import {
  followStartAction,
  followSuccessAction,
  followErrorAction,
} from "./types/followActionTypes";
import Follow, { followAttributes } from "../../models/Follow";

const followStart = (): followStartAction => {
  return {
    type: actionTypes.FOLLOW_START,
  };
};

const followSuccess = (follows: followAttributes): followSuccessAction => {
  return {
    type: actionTypes.FOLLOW_SUCCESS,
    payload: follows,
  };
};

const followError = (error: string): followErrorAction => {
  return {
    type: actionTypes.FOLLOW_ERROR,
    payload: error,
  };
};

// Async actions
export const getFollowsByUrl = (url: string): AppThunk => {
  return async (dispatch) => {
    dispatch(followStart());
    let response: followAttributes | null;

    response = await Follow.getFollowsByUrl(url);
    if (!response) {
      return dispatch(followError("Algo correu mal!"));
    }
    dispatch(followSuccess(response!));
  };
};
