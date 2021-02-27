import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/usersReducer";
import followReducer from "./reducers/followReducer";
import reposReducer from "./reducers/reposReduces";

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
  user: usersReducer,
  follow: followReducer,
  repos: reposReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
