import axios from "axios";

export const USER_NAME = "USER_NAME";
export const GIT_USER_NAME = "GIT_USER_NAME";
export const GIT_REPOS_NAME = "GIT_REPOS_NAME";
export const USER_NAME_ERROR = "USER_NAME_ERROR";
export const CHANGE_PAGE = "CHANGE_PAGE";

export const userNameAction = () => {
  return {
    type: "USER_NAME",
  };
};

export const userNameSuccessAction = (userName) => {
  return {
    type: "GIT_USER_NAME",
    payload: userName,
  };
};

export const userReposSuccessAction = (reposname) => {
  return {
    type: "GIT_REPOS_NAME",
    payload: reposname,
  };
};

export const userNameErrorAction = (error) => {
  return {
    type: "USER_NAME_ERROR",
    payload: error,
  };
};

export const currentPageAction = (currentPage) => {
  return {
    type: "CHANGE_PAGE",
    payload: currentPage,
  };
};

export const userNameThunk = (user) => async (dispatch) => {
  try {
    dispatch(userNameAction());
    const { data } = await axios.get(`https://api.github.com/users/${user}`);
    dispatch(userNameSuccessAction(data));
  } catch (error) {
    alert("wrong user name");
    dispatch(userNameErrorAction(error));
  }
};

export const reposNameThunk = (user) => async (dispatch) => {
  const { data } = await axios.get(`https://api.github.com/users/${user}/repos`);
  dispatch(userReposSuccessAction(data));
};
