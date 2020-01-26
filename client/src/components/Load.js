import React, { Fragment } from 'react';


const Load = () => {
    return (
        <Fragment>
            <form onSubmit={onSubmit} className="form">
                <input type='text' name='text' placeholder="upload Json" value={text} onChange={onChange} />
                <input type="submit" value="upload" className="btn btn-dark"/>
            </form>
            
            </Fragment>
    )
}

export default Load; 