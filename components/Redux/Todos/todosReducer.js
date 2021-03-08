import { ADD_TODOS, MARK_COMPLETED } from "./todosType";
const initialState = {
  Todos: [],
  CompletedTodos: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS: {
      return {
        Todos: [action.value, ...state.Todos],
      };
    }
    case MARK_COMPLETED: {
      console.log(action.value);
      return {
        CompletedTodos: [action.value, ...state.CompletedTodos],
      };
    }
    default: {
      return { ...state };
    }
  }
};
