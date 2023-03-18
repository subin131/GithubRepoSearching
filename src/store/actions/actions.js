import * as actionTypes from "./actionTypes";
import githubApi from "../services/githubApi";

export function searchRepositoriesSuccess(repositories) {
  return { type: actionTypes.SEARCH_REPOSITORIES_SUCCESS, repositories };
}

export function searchRepositories(searchQuery, sortCriteria, resultsPerPage, page) {
  return function (dispatch) {
    return githubApi
      .searchRepositories(searchQuery, sortCriteria, resultsPerPage, page)
      .then((response) => {
        dispatch(searchRepositoriesSuccess(response));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function getRepositorySuccess(repository) {
  return { type: actionTypes.GET_REPOSITORY_SUCCESS, repository };
}

export function getRepository(fullName) {
  return function (dispatch) {
    return githubApi.getRepository(fullName).then((response) => {
      dispatch(getRepositorySuccess(response));
    });
  };
}
