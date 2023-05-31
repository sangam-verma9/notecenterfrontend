import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import {
  deletenoteReducer,
  noteReducer,
  notecreateReducer,
  updatenoteReducer,
} from "./reducers/notereduce";

const reducer = combineReducers({
  userlogin: userLoginReducer,
  userregister: userRegisterReducer,
  notelist: noteReducer,
  notecreate: notecreateReducer,
  updatenote: updatenoteReducer,
  deletenote: deletenoteReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialstate = {
  userlogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
