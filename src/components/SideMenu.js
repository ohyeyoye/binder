import React from "react";
import styled, { keyframes } from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

const fadeIn = out => keyframes`
  from {
    opacity: ${out ? 1 : 0};
    background-color: rgba(0, 0, 0, ${out ? 0.2 : 0});
  }
  to {
    opacity: ${out ? 0 : 1};
    background-color: rgba(0, 0, 0, ${out ? 0 : 0.2});
  }
`;

const SideMenu = ({ className }) => {
  return (
    <nav className={`${className} side-menu opened`}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <span className="todo-count">5</span>
          <a href="#">To-dos</a>
        </li>
      </ul>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    ...state.TodoHandler
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);

export default styled(SideMenu)`
  width: 0px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  transition: width 0.5s ease-in-out;
  animation: ${fadeIn(true)} 0.5s ease-in-out 1;
  &.opened {
    width: 300px;
    animation: ${fadeIn(false)} 0.5s ease-in-out 1;
  }
  ul {
    margin-top: 8em;
    padding: 0 2em;
    overflow: hidden;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 100;
      text-align: right;
      white-space: nowrap;
      margin-bottom: 1em;
      font-size: 2em;
      &:last-child {
        margin-bottom: 0;
      }
      .todo-count {
        color: white;
      }
      a {
        flex: 1;
        color: white;
        text-decoration: none;
      }
    }
  }
`;
