import React from "react";
import { Popover } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";

const TodoPopover = ({
  anchorEl,
  setAnchorEl,
  setModalState,
  setOpenDialog,
  setOpenModal,
  todo,
}) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleEdit = () => {
    setModalState({
      title: "Edit todo",
      action: "Edit",
      todo: todo,
    });
    setAnchorEl(null);

    setOpenModal(true);
  };

  const handleDelete = () => {
    setModalState({
      title: "Delete todo",
      action: "Delete",
      todo: todo,
    });
    setAnchorEl(null);
    setOpenDialog(true);
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Box className="popoverBox">
        <div className="edit" onClick={() => handleEdit()}>
          <EditIcon className="icon" />
          <span>Edit</span>
        </div>
        <div className="delete" onClick={() => handleDelete()}>
          <DeleteIcon className="icon" />
          <span>Delete</span>
        </div>
      </Box>
    </Popover>
  );
};

export default TodoPopover;
