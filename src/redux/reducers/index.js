import { combineReducers } from "redux";
import loginReducer from "./login";
import planetReducer from "./planet";

export default combineReducers({ 
    loginData : loginReducer,
    planets : planetReducer
});