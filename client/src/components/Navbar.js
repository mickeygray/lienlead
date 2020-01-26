import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Navbar = ({icon, title}) =>  {


    
        return (
            <nav className="navbar bg-primary">
                <h1>
                   <i className={icon}/> {title}
                </h1>
                <ul>
                    <li><Link to="/api/liens">Upload Json</Link></li>
                    <li><Link to="/api/leads">Export SQL</Link></li>
                    <li><Link to="/search">Search Liens</Link></li>
                    <li><Link to="/lead">Gen Leads</Link></li>
                </ul>
            </nav>
        )
    }


Navbar.defaultProps = {
    title:"LIENLEAD",
    icon:"far fa-edit"
    
};

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
};

export default Navbar
