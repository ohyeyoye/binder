import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faRedo } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({
  className,
  text,
  completed,
  onComplete,
  onDelete,
  onRedo
}) => {
  return (
    <li className={className}>
      <span className="todo-text">{text}</span>
      <span className="completed-text">Completed</span>
      <div className="todo-icon-container">
        {completed ? (
          <FontAwesomeIcon
            className="todo-icon"
            icon={faRedo}
            onClick={onComplete}
          />
        ) : (
          <FontAwesomeIcon
            className="todo-icon"
            icon={faCheck}
            onClick={onRedo}
          />
        )}
        <FontAwesomeIcon
          className="todo-icon"
          icon={faTimes}
          onClick={onDelete}
        />
      </div>
    </li>
  );
};

export default styled(TodoItem)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 0 0 0 1em;
  .todo-text {
    flex: 1;
    text-decoration: ${({ completed }) => (completed ? "line-through" : "none")}
    font-size: 1em;
    color: ${({ completed }) => (completed ? "lightGray" : "white")}
  }
  .completed-text {
    visibility: ${({ accessories, completed }) =>
      accessories && completed ? "visible" : "hidden"}
    color: lightGray;
    width: 100px;
    text-align: center;
  }
  &:last-child {
    border-bottom: none;
  }
  .todo-icon-container {
    visibility: ${({ accessories }) => (accessories ? "visible" : "hidden")}
    background-color: #194a2f;
    height: 100%;
    padding: 1em;
    .todo-icon {
      color: white;
      margin-right: 1em;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
