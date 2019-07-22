import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import { below, size } from "../utilities";
//import PropTypes from "prop-types";
//import "./index.css"
const fadeIn = (toward, distance = 100) => keyframes`
  from {
    ${toward}: ${distance}px;
    opacity: 0
  }
  to {
    ${toward}: 0px;
    opacity: 1
  }
`;
const DateText = styled.h2`
  position: relative;
  font-family: monospace;
  font-size: 6em;
  font-weight: 100;
  color: white;
  text-align: right;
  margin-bottom: 8px;
  animation: ${fadeIn("left")} 1s ease-in-out 1;
  ${below.med`
    font-size: 4em;
  `}
  ${below.small_med`
    font-size: 3em;
  `}
`;
const TimeText = styled.h3`
  position: relative;
  font-family: monospace;
  font-size: 3em;
  font-weight: 300;
  color: white;
  text-align: right;
  margin-right: 32px;
  animation: ${fadeIn("top", 32)} 1s ease-in-out 1;
  ${below.med`
    font-size: 2em;
  `}
  ${below.small_med`
    font-size: 1.5em;
  `}
`;
class DateDisplay extends Component {
  componentWillMount() {
    setInterval(() => {
      const date = new Date();
      this.props.updateDate(date);
    }, 100);
  }
  render() {
    const { year, month, day, hours, minutes, seconds, period } = this.props;
    const formatDate = () => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      if (months[month] && day && year) {
        return `${months[month]} ${day}, ${year}`;
      } else {
        return "";
      }
    };
    const formatTime = () => {
      if (hours && minutes && seconds && period) {
        return `${hours}:${minutes}:${seconds} ${period}`;
      } else {
        return "";
      }
    };

    return (
      <div className="date-display">
        <div>
          <DateText>{formatDate()}</DateText>
          <TimeText>{formatTime()}</TimeText>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.DateHandler
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateDisplay);
