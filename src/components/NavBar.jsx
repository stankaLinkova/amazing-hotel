import * as React from 'react';
import { Link } from "react-router-dom";

const pages = ['contact', 'rooms', 'restaurant', 'trips', 'home'];

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function NavBar() {
  return (
    <div className="navigation-bar">
        <div className="logo">
        AH
        </div>
        <div className="navbar-items">
        {pages.map((page) => (
            <div className="navbar-item"
            key={page}
            >
            {page === "home" ? <Link to={``} className="link-style">Home</Link> : <Link to={page} className="link-style">{capitalize(page)}</Link>}
            </div>
        ))}
        </div>
    </div>
  );
}
export default NavBar;