import React, { Fragment } from "react";
import "./todo.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../actions";

const Todo = ({ todo, setAnchorEl, setModalState }) => {
  const dispatch = useDispatch();

  const onClick = (todo, target) => {
    setModalState({
      title: "",
      action: "Edit",
      todo: todo,
    });
    setAnchorEl(target);
  };

  const handleUpdate = (todo) => {
    dispatch(updateTodo(todo));
  };
  return (
    <Fragment>
      <div className="todo">
        <div className="inner">
          <div className="grouped">
            {todo.complete ? (
              <RadioButtonCheckedIcon
                className="icon"
                onClick={() =>
                  handleUpdate({
                    id: todo.id,
                    task: todo.task,
                    complete: !todo.complete,
                  })
                }
              />
            ) : (
              <RadioButtonUncheckedIcon
                className="icon"
                onClick={() =>
                  handleUpdate({
                    id: todo.id,
                    task: todo.task,
                    complete: !todo.complete,
                  })
                }
              />
            )}

            <div className="text">{todo.task}</div>
          </div>
          <IconButton onClick={(evt) => onClick(todo, evt.currentTarget)}>
            <MoreVertOutlinedIcon className="moreIcon" />
            {todo.ID}
          </IconButton>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
