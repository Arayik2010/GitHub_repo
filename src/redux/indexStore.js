import { combineReducers } from "redux";
import { userNameReducer } from "./reducer";

export const rootReducer = combineReducers({
  userName: userNameReducer,
});
