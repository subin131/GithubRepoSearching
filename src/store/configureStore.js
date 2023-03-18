import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../store/reducers/reducers";

export default function store(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
