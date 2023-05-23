import React from 'react';
import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: "none",
    color: 'white',
    fontSize: "25px",
}

const Navbar = () =>{
    return (
        <div>
        <div className="navbar">
            <div className="logo">ManageApp</div>
                <ul className="nav-links">
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/todo" style={linkStyle}>To do</Link>
                <Link to="/contact" style={linkStyle}>Contact</Link>
                </ul>
        </div>
        </div>
    )
}

export default Navbar