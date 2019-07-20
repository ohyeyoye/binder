import * as types from "./ActionTypes";

export const updateDate = date => {
  return {
    type: types.UPDATE_DATE_TIME,
    date
  };
};
