import React, { Component } from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";
//import "./index.css"

class DateDisplay extends Component {
  state = {
    date: "",
    time: ""
  };
  componentDidMount() {
    setInterval(() => {
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
      const date = new Date();
      this.setState({
        date: `${
          months[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`,
        time: formatTime(date)
      });
    }, 100);
    const formatTime = date => {
      const period = date.getHours() > 12 ? "PM" : "AM";
      const hours = formatTimeElement(date.getHours(), true);
      const minutes = formatTimeElement(date.getMinutes(), false);
      const seconds = formatTimeElement(date.getSeconds(), false);
      return `${hours}:${minutes}:${seconds} ${period}`;
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
  }
  render() {
    const { className } = this.props;
    const { date, time } = this.state;
    return (
      <div className={className}>
        <h2>{date}</h2>
        <h3>{time}</h3>
      </div>
    );
  }
}

DateDisplay.propTypes = {};

DateDisplay.defaultProps = {};

export default styled(DateDisplay)`
  h2 {
    font-size: 8em;
    font-weight: 300;
    color: white;
  }
  h3 {
    font-family: monospace;
  }
`;
