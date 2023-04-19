import {
  publicRequest,
} from "../requestMethods";
import {
  startUserProcess,
  loginFailure,
  loginSuccess,
} from "./userRedux"

//USERS
// export const login = async (dispatch) => {
//   dispatch(startUserProcess());

//   try {
//     const response = await publicRequest.get('/me');
//     console.log(response);

//     // dispatch(loginSuccess(response.data));
//   } catch (error) {
//     dispatch(loginFailure());
//   }
// }
export const login = () => {
  const link = `${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`;

  return link;
}
