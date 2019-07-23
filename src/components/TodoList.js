import React from "react";
import { Button, TextInput } from "../elements";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import { TodoItem } from "../components";
import { below, size } from "../utilities";

const InputField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${TextInput.round} {
    max-width: 960px;
    margin-right: 1em;
    &:focus {
      outline: none;
    }
  }
  margin-bottom: 1em;
`;
const TodoItems = styled.ul`
  width: 100%;
  max-width: 1026px;
  height: 240px;
  border: none;
  border-radius: 25px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background: rgba(14, 45, 28, 0.4);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(14, 45, 28, 1);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(14, 45, 28, 0.7);
  }
`;
const TodoList = ({
  className,
  todoItems,
  addTodo,
  deleteTodo,
  toggleTodo
}) => {
  const inputFieldHeight = 50;
  const mapToComponents = data => {
    if (data === undefined || data.length === 0) {
      return (
        <TodoItem
          key="empty"
          text="Please add your To-do"
          accessories={false}
        />
      );
    }
    return data.map(item => {
      return (
        <TodoItem
          key={item.id}
          {...item}
          accessories={true}
          onComplete={() => {
            toggleTodo(item.id);
          }}
          onDelete={() => {
            deleteTodo(item.id);
          }}
          onRedo={() => {
            toggleTodo(item.id);
          }}
        />
      );
    });
  };
  return (
    <div className="todo-list">
      <InputField>
        <TextInput.round
          className="text-input"
          type="text"
          placeholder="Type something"
          fontSize="16"
          borderRadius={inputFieldHeight / 2}
          onKeyPress={e => {
            if (e.charCode === 13) {
              addTodo(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <Button.circle
          width={inputFieldHeight}
          fontSize="100"
          color="#194a2f"
          onClick={() => {
            const text = document.querySelector(".text-input");
            const textInput = document.querySelector(".text-input");
            const todoItems = document.querySelector(".todo-items");
            addTodo(text.value);
            textInput.value = "";
            todoItems.scrollTop = 0;
          }}
        >
          Add
        </Button.circle>
      </InputField>
      <TodoItems className="todo-items">{mapToComponents(todoItems)}</TodoItems>
    </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
