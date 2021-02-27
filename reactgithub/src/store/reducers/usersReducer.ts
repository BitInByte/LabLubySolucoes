import actionTypes from "../actions/actionTypes";
import userActions from "../actions/types/userActionTypes";

const initialState: IUsersState = {
  login: null,
  error: null,
  loading: false,
  data: undefined,
};

const userActionStart = (state: IUsersState, _: userActions): IUsersState => {
  return {
    ...state,
    loading: true,
    login: null,
    error: null,
  };
};

const userActionSuccess = (
  state: IUsersState,
  action: userActions
): IUsersState => {
  let user;
  if (action.type === actionTypes.USER_SUCCESS) {
    user = action.payload;
  }

  return {
    ...state,
    loading: false,
    data: user,
  };
};

const userActionError = (
  state: IUsersState,
  action: userActions
): IUsersState => {
  let error = null;
  if (action.type === actionTypes.USER_ERROR) {
    error = action.payload;
  }

  return {
    ...state,
    loading: false,
    error,
  };
};

const userActionFinish = (state: IUsersState, _: userActions): IUsersState => {
  return {
    ...initialState,
  };
};

const usersReducer = (state = initialState, action: userActions) => {
  switch (action.type) {
    case actionTypes.USER_START:
      return userActionStart(state, action);
    case actionTypes.USER_SUCCESS:
      return userActionSuccess(state, action);
    case actionTypes.USER_ERROR:
      return userActionError(state, action);
    case actionTypes.USER_FINISH:
      return userActionFinish(state, action);
    default:
      return state;
  }
};

export default usersReducer;
