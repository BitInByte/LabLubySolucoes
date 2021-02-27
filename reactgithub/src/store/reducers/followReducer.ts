import { followTypes } from "../actions/actionTypes";
import followActions from "../actions/types/followActionTypes";

const initialState: IFollowState = {
  loading: false,
  error: null,
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

  if (action.type === followTypes.FOLLOW_ERROR) {
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
  _: followActions
): IFollowState => {
  return {
    ...state,
    loading: false,
    error: null,
  };
};

const followReducer = (state = initialState, action: followActions) => {
  switch (action.type) {
    case followTypes.FOLLOW_START:
      return followActionStart(state, action);
    case followTypes.FOLLOW_ERROR:
      return followActionError(state, action);
    case followTypes.FOLLOW_SUCCESS:
      return followActionSuccess(state, action);
    default:
      return state;
  }
};

export default followReducer;
