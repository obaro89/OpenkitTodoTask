import React from "react";
import { useEffect } from "react";
import { getTodos } from "./actions";
import "./app.scss";
import Header from "./components/header/Header";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Todo from "./components/todo/Todo";
import { SpinnerRoundFilled } from "spinners-react";
import AppModal from "./components/modal/Modal";
import AlertDialogSlide from "./components/dialog/Dialog";
import TodoPopover from "./components/popover/Popover";
import { Alert } from "@mui/material";

function App() {
  //Modal box
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const handleModalClose = () => setOpenModal(false);
  const [modalState, setModalState] = React.useState({
    title: "Add a new todo",
    action: "add",
    todo: {
      id: "",
      task: "",
      complete: "",
    },
  });

  //dialog box
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  let todos = useSelector((state) => state.todos.todos);
  let isLoading = useSelector((state) => state.todos.loading);

  if (isLoading) {
    return (
      <div className="loading">
        <SpinnerRoundFilled color="#aa54db" size="150px" thickness={300} />
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="App">
        <Header setOpen={setOpenModal} setModalState={setModalState} />
        <div className="todo">
          <Alert
            variant="filled"
            severity="info"
            sx={{ backgroundColor: "#aa54db" }}
          >
            Todo list is empty. Please add a task
          </Alert>
        </div>

        <AppModal
          handleClose={handleModalClose}
          setOpen={setOpenModal}
          open={openModal}
          title={modalState.title}
          action={modalState.action}
          todo={modalState.todo}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <Header setOpen={setOpenModal} setModalState={setModalState} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          setAnchorEl={setAnchorEl}
          setModalState={setModalState}
        />
      ))}

      <AppModal
        handleClose={handleModalClose}
        setOpen={setOpenModal}
        open={openModal}
        title={modalState.title}
        action={modalState.action}
        todo={modalState.todo}
      />

      <AlertDialogSlide
        handleClose={handleClose}
        open={openDialog}
        todo={modalState.todo}
      />
      <TodoPopover
        todo={modalState.todo}
        setModalState={setModalState}
        setOpenModal={setOpenModal}
        setAnchorEl={setAnchorEl}
        setOpenDialog={setOpenDialog}
        anchorEl={anchorEl}
      />
    </div>
  );
}

export default App;
