import * as types from "../actions/ActionTypes";

/*
{
  id: Int,
  title: String,
  completed: Bool
}
*/
const initialState = {
  nextTodoId: 0,
  todoItems: []
};

const TodoHandler = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      if (action.text.trim() === "") return state;
      return {
        nextTodoId: state.nextTodoId + 1,
        todoItems: [
          {
            id: `todo-${state.nextTodoId}`,
            text: action.text,
            completed: false
          },
          ...state.todoItems
        ]
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todoItems: state.todoItems.filter(todoItem => todoItem.id !== action.id)
      };
    case types.TOGGLE_TODO:
      return {
        ...state,
        todoItems: state.todoItems.map(todoItem =>
          todoItem.id === action.id
            ? {
                ...todoItem,
                completed: !todoItem.completed
              }
            : todoItem
        )
      };
    default:
      return state;
  }
};

export default TodoHandler;
