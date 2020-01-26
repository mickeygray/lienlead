import React, { useReducer } from 'react';
import axios from 'axios';
import SearchContext from './searchContext';
import SearchReducer from './searchReducer';

import {
    SEARCH_LIENS,
    CLEAR_SEARCH,
    POPULATE_LIEN
} from '../types';

const SearchState = props => {
    const initialState = {
      liens: [],
      lien: {}
    };
  
    const [state, dispatch] = useReducer(SearchReducer, initialState);
  
    // Search Users
    const searchLiens = async text => {
 
    const res = await axios.get(
       './liens.json'
      );
  
      dispatch({
        type: SEARCH_LIENS,
        payload: res.data
      });
    };
  
    return (
      <SearchContext.Provider
        value={{
            liens:state.liens,
            lien:state.lien,
            searchLiens
        }}
      >
        {props.children}
      </SearchContext.Provider>
    );
  };
  
  export default SearchState;
  
  