import React, { Fragment } from "react";
import Todo from "../todo/Todo";
import "./todolist.scss";

const TodoList = ({ todo }) => {
  return (
    <Fragment>
      <Todo todo={todo} />
    </Fragment>
  );
};

export default TodoList;
