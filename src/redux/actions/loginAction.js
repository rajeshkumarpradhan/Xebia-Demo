import axiosInstance from "../../configs/axios-instance";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR,
  } from "../actionTypes";

export function isLoading(value) {
    return {
      type: value
    };
}
export function isLoaded(value, data) {
    return {
      type: value,
      payload:data
    };
}
export function isError(value, error) {
    return {
      type: value,
      payload:error
    };
}
export function doLogin(username, password) {
    return (dispatch) => {
      let userUrl = "/people/?search="+username;
        dispatch(isLoading(LOGIN_REQUEST));
        axiosInstance
        .get(userUrl)
        .then((response) => {
            let users = response.data.results;
            if(users.length > 0){
              users.forEach(element => {
                if(element.name === username && element.birth_year === password){
                  dispatch(isLoaded(LOGIN_SUCCESS, element)); 
                  localStorage.setItem("userDetails" , element.name )
                  return;
                }
              });
            }
            dispatch(isError(LOGIN_ERROR, "Invalid Credentials"));
        })
        .catch((error) => {
            dispatch(isError(LOGIN_ERROR, "Invalid Credentials"));
        });
    };
   
}

