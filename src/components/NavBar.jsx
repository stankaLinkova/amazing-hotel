import * as React from 'react';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RoofingIcon from '@mui/icons-material/Roofing';

const pages = ['home', 'rooms', 'restaurant', 'trips', 'contact'];

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function NavBar() {

  const [navColor, setNavColor] = useState({background: "#eddccd"});
  const [linkColor, setLinkColor] = useState({color: "#866124"})

  const location = useLocation();

  useEffect(()=>
    { 
      if(location.pathname === '/'){
        setNavColor({background: "transparent"});
        setLinkColor({color: "white"});
      } else {
        setNavColor({background: "#eddccd"});
        setLinkColor({color: "#866124"});
      }
    },[location])

  return (
    <div className="navigation-bar" style={navColor}>
        <div className="logo">
          <RoofingIcon fontSize="large" sx={linkColor}/>
        </div>
        <div className="navbar-items">
        {pages.map((page) => (
            <div className="navbar-item"
            key={page}
            >
            {page === "home" ? <Link to={``} className="link-style" style={linkColor} >Home</Link> : <Link to={page} className="link-style" style={linkColor}>{capitalize(page)}</Link>}
            </div>
        ))}
        </div>
    </div>
  );
}
export default NavBar;