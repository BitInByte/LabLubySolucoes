import { AppThunk } from "../types/thunk";
import axios from "axios";
import { followTypes } from "./actionTypes";
import {
  followStartAction,
  followSuccessAction,
  followErrorAction,
} from "./types/followActionTypes";

const followStart = (): followStartAction => {
  return {
    type: followTypes.FOLLOW_START,
  };
};

const followSuccess = (): followSuccessAction => {
  return {
    type: followTypes.FOLLOW_SUCCESS,
  };
};

const followError = (error: string): followErrorAction => {
  return {
    type: followTypes.FOLLOW_ERROR,
    payload: error,
  };
};

// Async actions
export const getFollowsByUrl = (url: string): AppThunk => {
  return async (dispatch) => {
    dispatch(followStart());
    console.log("Dispatched");
    console.log("URL: ", url);
    let response;

    try {
      response = await axios.get(url);
      console.log("Response: ", response.data);
    } catch (err) {
      console.log(err);
    }
  };
};
