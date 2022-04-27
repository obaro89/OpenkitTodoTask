import { EDIT_TODO, DELETE_TODO, FETCH_TODOS, SAVE_TODO } from "../types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getTodos = () => async (dispatch) => {
  let todos = [];
  try {
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
      todos.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    dispatch({
      type: FETCH_TODOS,
      payload: todos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const saveTodo = (todo) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      task: todo,
      complete: false,
    });
    dispatch({
      type: SAVE_TODO,
      payload: {
        id: docRef.id,
        task: todo,
        complete: false,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (todoID) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "todos", todoID));

    dispatch({
      type: DELETE_TODO,
      payload: {
        id: todoID,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = (todo) => async (dispatch) => {
  try {
    await updateDoc(doc(db, "todos", todo.id), {
      task: todo.task,
      complete: todo.complete,
    });

    dispatch({
      type: EDIT_TODO,
      payload: {
        id: todo.id,
        task: todo.task,
        complete: todo.complete,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
