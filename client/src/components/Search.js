import React, { useState, useContext } from 'react';
import SearchContext from '../context/searchContext';

const Search = ({ searchLiens }) => {

    const searchContext = useContext(SearchContext);

    const [text, setText] = useState('');

    const onChange = e =>  setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        searchContext.getLiens(text);
        setText('');
    };
    
     return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type='text' name='text' placeholder="enter address" value={text} onChange={onChange} />
                    <input type="submit" value="Search" className="btn btn-dark"/>
                </form>
                
            </div>
        )
    }


export default Search