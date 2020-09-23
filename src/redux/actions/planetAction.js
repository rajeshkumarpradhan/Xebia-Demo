import axiosInstance from "../../configs/axios-instance";
import { PLANET_REQUEST, PLANET_SUCCESS, PLANET_ERROR,
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
export function getPlanets(text) {
    return (dispatch) => {
      let userUrl = text ?  "/people/?search=" + text : "/people/" ;
        dispatch(isLoading(PLANET_REQUEST));
        axiosInstance
        .get(userUrl)
        .then((response) => {
            let users = response.data.results;
            dispatch(isLoaded(PLANET_SUCCESS, users));
        })
        .catch((error) => {
            dispatch(isError(PLANET_ERROR, error));
        });
    };
   
}

