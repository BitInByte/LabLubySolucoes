import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import actionTypes from "../actions/actionTypes";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IStore,
  null,
  Action<actionTypes>
>;
