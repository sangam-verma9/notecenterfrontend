import axios from "axios";
import {
  ALL_NOTE_FAIL,
  ALL_NOTE_REQUEST,
  ALL_NOTE_SUCCESS,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_SUCCESS,
  NOTE_CREATE_FAIL,
  UPDATE_NOTE_FAIL,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  NOTE_DELETE_FAIL,
  NOTE_DELETE_REQUEST,
  NOTE_DELETE_SUCCESS,
} from "../constants/noteconstants";
export const noteslist = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_NOTE_REQUEST });
    const { data } = await axios.get("/api/notes");
    dispatch({ type: ALL_NOTE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_NOTE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createnote = (title, category, content) => async (dispatch) => {
  try {
    dispatch({ type: NOTE_CREATE_REQUEST });
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/notes/create",
      {
        title,
        category,
        content,
      },
      config
    );
    dispatch({ type: NOTE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NOTE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatenote =
  (id, title, category, content) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_NOTE_REQUEST });
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/notes/${id}`,
        {
          title,
          category,
          content,
        },
        config
      );

      dispatch({ type: UPDATE_NOTE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_NOTE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deletenote = (id) => async (dispatch) => {
  try {
    dispatch({ type: NOTE_DELETE_REQUEST });
    const note = await axios.delete(`/api/notes/${id}`);
    window.location.reload();

    dispatch({ type: NOTE_DELETE_SUCCESS, payload: note });
  } catch (error) {
    dispatch({
      type: NOTE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
