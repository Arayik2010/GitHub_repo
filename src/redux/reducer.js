import { USER_NAME, GIT_USER_NAME, GIT_REPOS_NAME, USER_NAME_ERROR, CHANGE_PAGE } from "./action";

export const initialState = {
  userName: [],
  reposName: [],
  loading: false,
  error: null,
  pageSize: 4,
};

export const userNameReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_NAME: {
      return {
        ...state,
        loading: true,
      };
    }
    case GIT_USER_NAME: {
      return {
        ...state,
        loading: false,
        userName: [payload],
      };
    }
    case GIT_REPOS_NAME: {
      return {
        ...state,
        reposName: payload,
      };
    }

    case USER_NAME_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }

    default:
      return state;
  }
};

export const userData = (state) => {
  return state.userName;
};
