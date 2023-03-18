import { combineReducers } from "redux";
import * as actionTypes from "../actions/actionTypes";

function repositories(state = [], action) {
  switch (action.type) {
    case actionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return action.repositories;
    default:
      return state;
  }
}

function repository(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_REPOSITORY_SUCCESS:
      return action.repository;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  repositories,
  repository,
});

export default rootReducer;
