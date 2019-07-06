import * as types from "./types";
import user from '../../data/user.json';

export const login = (email, password) => {
  return (dispatch, getState) => {
    if (email === user.email && password === user.password) {
      dispatch(setLoggedInState(true));
      return true;
    } else {
      dispatch(setLoggedInState(false));
      return false;
    }
  };
};


export const setLoggedInState = (loggedinState) => {
    return {
        type: types.LOGGED_IN_STATE,
        loggedinState
    }
}
