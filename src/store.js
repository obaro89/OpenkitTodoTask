import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./reducer";

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
