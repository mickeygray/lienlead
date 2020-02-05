import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import LeadContext from './leadContext';
import LeadReducer from './leadReducer';

import {
  POST_LEAD,
  SET_LEAD
} from '../types';

const LeadState = props => {
  const initialState = {
     lead: {},
     leads: []

  };

  const [state, dispatch] = useReducer(LeadReducer, initialState);
  
  
  


 const setLead = lead => {
  dispatch({ type: SET_LEAD, payload: lead });
};





 

  return (
    <LeadContext.Provider
      value={{
        leads: state.leads,
        lead: state.lead,
        setLead


      }}
    >
      {props.children}
    </LeadContext.Provider>
  );
};

export default LeadState;