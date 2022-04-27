import styled from "@emotion/styled";
import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "./header.scss";

const AddTodo = styled(Fab)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fdfdfd",
  "&:hover": {
    backgroundColor: theme.palette.primary.darker,
  },
}));

const Header = ({ setOpen, setModalState }) => {
  const onClick = () => {
    setModalState({
      title: "Add a new Todo",
      action: "add",
      todo: {
        id: "",
        task: "",
        complete: "",
      },
    });
    setOpen(true);
  };

  const todos = useSelector((state) => state.todos.todos);
  let string = todos.length > 1 ? "tasks" : "task";

  return (
    <Fragment>
      <div className="header">
        <div className="date">
          <p>
            <span>{moment().format("dddd")}</span>, {moment().format("Do")}{" "}
            {moment().format("MMMM")}
          </p>
          <span>
            {todos.length} {string}
          </span>
        </div>
        <div className="add">
          <AddTodo onClick={() => onClick()}>
            <Add />
          </AddTodo>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
