import { Typography } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import AddForm from "../addform/AddForm";
import "./modal.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #dadbddaf",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const AppModal = ({ open, handleClose, todo, title, action }) => {
  return (
    <div className="modalBox">
      {
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="modalBox">
            <h4>{title}</h4>
            <div>
              <AddForm action={action} todo={todo} handleClose={handleClose} />
            </div>
          </Box>
        </Modal>
      }
    </div>
  );
};

export default AppModal;
