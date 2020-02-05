import React from 'react'
import CallContext from '../../context/call/callContext'
import LienContext from '../../context/contact/lienContext'
import LeadForm from './LeadForm';

const Lead = () => {
    return (
<CallContext.Consumer>
    {number => ( 
<LienContext.Consumer>
    {lien => (
        <LeadForm number={number} lien={lien} />
    )}
</LienContext.Consumer>
    )}
</CallContext.Consumer>
    );
}

export default Lead
