import { PLANET_REQUEST, PLANET_SUCCESS, PLANET_ERROR} from "../actionTypes";
  
  const initialState = {
   planets : []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case PLANET_REQUEST: {
        return {
          ...state,
          planets: []
        };
      }
      case PLANET_SUCCESS: {
        return {
          ...state,
          planets : action.payload
        };
      }
      case PLANET_ERROR: {
        return {
          ...state,
          planets : []
        };
      }
      default:
        return state;
    }
  }