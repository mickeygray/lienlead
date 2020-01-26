import {
    GET_LIENS,
    ADD_LIENS
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_LIENS:
        return {
          ...state,
          contacts: action.payload,
          loading: false
        };
      case ADD_LIENS:
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
          loading: false
        };
     
      default:
        return state;
    }
  };

  