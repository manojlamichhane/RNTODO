import { ADD_TODOS, MARK_COMPLETED } from "./todosType";

export const addTodos = (todos) => {
  return {
    type: ADD_TODOS,
    value: todos,
  };
};

export const markCompleted = (todo) => {
  return {
    type: MARK_COMPLETED,
    value: todo,
  };
};
