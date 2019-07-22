import * as types from "../actions/ActionTypes";

const initialState = {
  year: "",
  month: "",
  day: "",
  hours: "",
  minutes: "",
  seconds: "",
  period: ""
};
const formatTimeElement = (element, isHours) => {
  if (isHours && element > 12) {
    element %= 12;
  }
  if (element < 10) {
    return `0${element}`;
  } else {
    return element;
  }
};
const DateHandler = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_DATE:
      return {
        year: action.date.getFullYear(),
        month: action.date.getMonth(),
        day: action.date.getDate(),
        hours: formatTimeElement(action.date.getHours(), true),
        minutes: formatTimeElement(action.date.getMinutes(), false),
        seconds: formatTimeElement(action.date.getSeconds(), false),
        period: action.date.getHours() >= 12 ? "PM" : "AM"
      };
    default:
      return state;
  }
};

export default DateHandler;
