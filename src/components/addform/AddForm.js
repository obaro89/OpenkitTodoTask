import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { saveTodo, updateTodo } from "../../actions";

const AddForm = ({ action, todo, handleClose }) => {
  const dispatch = useDispatch();

  let [input, setInput] = React.useState("");
  let [editInput, setEditInput] = React.useState({
    task: todo.task,
    complete: todo.complete,
    id: todo.id,
  });

  const handleEdit = (val) => {
    setEditInput({
      ...editInput,
      task: val,
    });
  };

  const handleSaveTodo = (todo) => {
    console.log(todo);
    if (!todo || todo.trim() === "") return alert("Field cannot be empty");
    handleClose(true);
    dispatch(saveTodo(todo));
  };

  const handleUpdateTodo = (todo) => {
    if (!todo || todo.task.trim() === "") return alert("Field cannot be empty");
    handleClose(true);
    dispatch(updateTodo(todo));
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <p>
        {action === "Edit" ? (
          <TextField
            value={editInput.task}
            id="standard-textarea"
            multiline
            variant="standard"
            sx={{
              width: "100%",
              padding: "10px 4px 10px 0",
            }}
            onChange={(e) => handleEdit(e.currentTarget.value)}
          />
        ) : (
          <TextField
            value={input}
            id="standard-textarea"
            label="Enter a new todo"
            multiline
            variant="standard"
            sx={{
              width: "100%",
              padding: "10px 4px 10px 0",
            }}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
        )}
      </p>

      {action === "Edit" && (
        <p style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "7px" }}>Completed:</span>
          {editInput.complete ? (
            <RadioButtonCheckedIcon
              sx={{ mr: "10px", color: "#aa54db" }}
              onClick={() =>
                setEditInput({
                  ...editInput,
                  complete: !editInput.complete,
                })
              }
            />
          ) : (
            <RadioButtonUncheckedIcon
              sx={{ mr: "10px", color: "#aa54db" }}
              onClick={() =>
                setEditInput({
                  ...editInput,
                  complete: !editInput.complete,
                })
              }
            />
          )}
        </p>
      )}

      {action === "Edit" ? (
        <Button
          variant="contained"
          sx={{ mt: "10px" }}
          onClick={(e) => handleUpdateTodo(editInput)}
        >
          Save
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ mt: "10px" }}
          onClick={(e) => handleSaveTodo(input)}
        >
          Save
        </Button>
      )}
    </Box>
  );
};

export default AddForm;
