import { EDIT_TODO, DELETE_TODO, FETCH_TODOS, SAVE_TODO } from "../types";

const initialState = {
  todos: [],
  loading: true,
};

export const todosReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_TODOS:
      return {
        ...state,
        loading: false,
        todos: payload,
      };

    case SAVE_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
        loading: false,
      };

    case EDIT_TODO:
      let index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos[index] = payload;
      return {
        ...state,
        todos: [
          payload,
          ...state.todos.filter((todo) => todo.id !== payload.id),
        ],
        loading: false,
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
        loading: false,
      };

    default:
      return state;
  }
};
