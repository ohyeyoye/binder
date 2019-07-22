import { combineReducers } from "redux";
import DateHandler from "./DateHandler";
import TodoHandler from "./TodoHandler";
const reducers = combineReducers({
  DateHandler,
  TodoHandler
});

export default reducers;
