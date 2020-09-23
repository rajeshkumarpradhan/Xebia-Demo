import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from "../actionTypes";
  
  const initialState = {
    loggedIn: null,
    error:null,
    errorMsg:""
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN_REQUEST: {
        return {
          ...state,
          loggedIn: false,
          error:false,
          errorMsg:""
        };
      }
      case LOGIN_SUCCESS: {
        return {
          ...state,
          loggedIn: true,
          error:false,
          errorMsg:""
        };
      }
      case LOGIN_ERROR: {
        return {
          ...state,
          loggedIn: false,
          error:true,
          errorMsg: action.payload
        };
      }
      default:
        return state;
    }
  }