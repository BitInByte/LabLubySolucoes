import actionTypes from "../actions/actionTypes";
import reposActions from "../actions/types/reposActionTypes";

const initialState: IReposState = {
  loading: false,
  error: null,
  data: null,
};

const reposActionStart = (state: IReposState, _: reposActions): IReposState => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const repoActionSuccess = (
  state: IReposState,
  action: reposActions
): IReposState => {
  let data = null;
  if (action.type === actionTypes.REPOS_SUCCESS) {
    data = action.payload;
  }

  return {
    ...state,
    loading: false,
    error: null,
    data,
  };
};

const repoActionError = (
  state: IReposState,
  action: reposActions
): IReposState => {
  let error = null;
  if (action.type === actionTypes.REPOS_ERROR) {
    error = action.payload;
  }

  return {
    ...state,
    loading: false,
    error,
  };
};

const reposReducer = (state = initialState, action: reposActions) => {
  switch (action.type) {
    case actionTypes.REPOS_START:
      return reposActionStart(state, action);
    case actionTypes.REPOS_SUCCESS:
      return repoActionSuccess(state, action);
    case actionTypes.REPOS_ERROR:
      return repoActionError(state, action);
    default:
      return state;
  }
};

export default reposReducer;
