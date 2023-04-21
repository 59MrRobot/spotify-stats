import { userRequest } from "../requestMethods";
import { getTopArtistFailure, getTopArtistSuccess, startTopArtistProcess } from "./topArtistRedux";
import {
  startUserProcess,
  loginFailure,
  loginSuccess,
} from "./userRedux"

//USERS
export const login = () => {
  const scope = 'user-top-read';

  const link = `${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${scope}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`;

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

export const getTopArtists = async (dispatch, timePeriod) => {
  dispatch(startTopArtistProcess());

  try {
    const response = await userRequest.get(`/me/top/artists?time_range=${timePeriod}&limit=50`);

    dispatch(getTopArtistSuccess(response.data));
  } catch (error) {
    dispatch(getTopArtistFailure());
  }
}
