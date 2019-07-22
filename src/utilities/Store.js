import { createStore } from "redux";
import { loadState } from "./LocalStorage";

const loadStore = reducers => {
  return loadState() === undefined
    ? createStore(reducers)
    : createStore(reducers, loadState());
};

export default loadStore;
