import { createStore } from "redux";
import { todosReducer } from "./Todos/todosReducer";

export const Store = createStore(todosReducer);
