import { userRequest } from "../requestMethods";
import {
  startUserProcess,
  loginFailure,
  loginSuccess,
} from "./userRedux"

//USERS
export const login = () => {
  const link = `${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`;

  return link;
}

export const getUser = async (dispatch) => {
  dispatch(startUserProcess());

  try {
    const response = await userRequest.get("/me");

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
}
