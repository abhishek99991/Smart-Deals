import { callApi } from "../../../Api/apiUtils";
import { authEndpoints } from "../../endpoints/Auth";

export const registerUser = ({ body }: any) =>
  callApi({
    uriEndPoint: authEndpoints.registerUser.v1,
    body,
  });

  export const sendOtpEmail = ({ body }: any) =>
    callApi({
      uriEndPoint: authEndpoints.sendOtpEmail.v1,
      body,
      withCredentials:true
      
    });

  export const loginApiCall = ({ body }: any) =>
      callApi({
        uriEndPoint: authEndpoints.userLogin.v1,
        body,
      });

  export const logoutUser = () =>
        callApi({
          uriEndPoint: authEndpoints.logoutUser.v1,
        });

  export const getUserDetails = () =>
          callApi({
            uriEndPoint: authEndpoints.getUserDetails.v1,
          });