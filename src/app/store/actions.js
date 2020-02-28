import * as actionTypes from "./actionTypes";

export const addNewTodo = todo => (dispatch, getState) => {
  const { todos } = getState();

  const newTodos = [...todos];
  newTodos.push(todo);

  dispatch({
    type: actionTypes.ADD_TODO,
    todo: newTodos
  });
};
