import { userTypes } from "../actions/actionTypes";
import userActions from "../actions/types/userActionTypes";

const initialState: IUsersState = {
  login: null,
  error: null,
  loading: false,
  data: null,
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
  if (action.type === userTypes.USER_SUCCESS) {
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
  if (action.type === userTypes.USER_ERROR) {
    error = action.payload;
  }

  return {
    ...state,
    loading: false,
    error,
  };
};

const usersReducer = (state = initialState, action: userActions) => {
  switch (action.type) {
    case userTypes.USER_START:
      return userActionStart(state, action);
    case userTypes.USER_SUCCESS:
      return userActionSuccess(state, action);
    case userTypes.USER_ERROR:
      return userActionError(state, action);
    default:
      return state;
  }
};

export default usersReducer;
