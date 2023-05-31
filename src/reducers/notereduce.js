import {
  ALL_NOTE_REQUEST,
  ALL_NOTE_SUCCESS,
  ALL_NOTE_FAIL,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_SUCCESS,
  NOTE_CREATE_FAIL,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
  NOTE_DELETE_REQUEST,
  NOTE_DELETE_SUCCESS,
  NOTE_DELETE_FAIL,
} from "../constants/noteconstants";
export const noteReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case ALL_NOTE_REQUEST:
      return { loading: true };
    case ALL_NOTE_SUCCESS:
      return { loading: false, notes: action.payload };
    case ALL_NOTE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const notecreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_CREATE_REQUEST:
      return { loading: true };
    case NOTE_CREATE_SUCCESS:
      return { loading: false, success: true };
    case NOTE_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const updatenoteReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_NOTE_REQUEST:
      return { loading: true };
    case UPDATE_NOTE_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_NOTE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deletenoteReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_DELETE_REQUEST:
      return { loading: true };
    case NOTE_DELETE_SUCCESS:
      return { loading: false };
    case NOTE_DELETE_FAIL:
      return { loading: false };
    default:
      return state;
  }
};
