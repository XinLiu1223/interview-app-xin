import { API_CALL } from './actions';

const initialState = {
  appleList: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case API_CALL:
    console.log(action.payload);
      return {
        ...state,
        appleList: action.payload
      }
    default: 
      return state;
  }
};
