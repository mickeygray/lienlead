import {
    POST_LEAD,
    GET_LEADS,
    SET_LEAD,
    SET_CURRENTNUMBER
  } from '../types';

  export default (state,action) => {
    switch(action.type) {
      case POST_LEAD:
        return {
            ...state,
            lead: action.payload
        };
        case SET_LEAD:
          return {
            ...state,
            lead: action.payload
          };
      default: 
       return state;


    }}