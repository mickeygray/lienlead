import React, { useEffect, useContext } from 'react';
import SearchContext from '../context/searchContext';

const Lien = ({match,address}) => {
    const searchContext = useContext(SearchContext);
    const { searchLiens } = searchContext;

    useEffect(()=>{
        searchLiens(match.params.address);
    },[]);

  

    return (
        <div>
          {address}
        </div>
    )
}

export default Lien;