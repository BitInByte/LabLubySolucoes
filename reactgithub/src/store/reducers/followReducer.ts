import actionTypes from "../actions/actionTypes";
import followActions from "../actions/types/followActionTypes";

const initialState: IFollowState = {
  loading: false,
  error: null,
  data: null,
};

const followActionStart = (
  state: IFollowState,
  _: followActions
): IFollowState => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const followActionError = (
  state: IFollowState,
  action: followActions
): IFollowState => {
  let error = null;

  if (action.type === actionTypes.FOLLOW_ERROR) {
    error = action.payload;
  }

  return {
    ...state,
    error,
    loading: false,
  };
};

const followActionSuccess = (
  state: IFollowState,
  action: followActions
): IFollowState => {
  let data = null;
  if (action.type === actionTypes.FOLLOW_SUCCESS) {
    data = action.payload;
  }
  return {
    ...state,
    loading: false,
    error: null,
    data: data!,
  };
};

const followActionReset = (
  _: IFollowState,
  __: followActions
): IFollowState => {
  return {
    ...initialState,
  };
};

const followReducer = (state = initialState, action: followActions) => {
  switch (action.type) {
    case actionTypes.FOLLOW_START:
      return followActionStart(state, action);
    case actionTypes.FOLLOW_ERROR:
      return followActionError(state, action);
    case actionTypes.FOLLOW_SUCCESS:
      return followActionSuccess(state, action);
    case actionTypes.FOLLOW_RESET:
      return followActionReset(state, action);
    default:
      return state;
  }
};

export default followReducer;
