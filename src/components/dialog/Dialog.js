import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../actions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose, todo }) {
  const dispatch = useDispatch();

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo.id));
    handleClose();
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Are you sure you want to delete this todo?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {todo.task}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={() => handleDelete(todo)}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
}
