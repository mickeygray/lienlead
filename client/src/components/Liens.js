import React, { useContext } from 'react';
import Lien from './Lien';
import SearchContext from '../context/searchContext';

const Liens = () => {

    const searchContext = useContext(SearchContext);
    return (
        <div>
            {liens.map(lien=>(
            <Lien key={lien.rmsid} address={lien.address}/> 
            ))}
        </div>
    )
}

export default Liens;
