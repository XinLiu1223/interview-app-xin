import { API_CALL } from "./actions";

const initialState = {
  appleListObj: {}
};

export const appleCode = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL:
      console.log(action.payload);
      return {
        ...state,
        appleListObj: action.payload
      };
    default:
      return state;
  }
};
