import React, { useState } from "react";
import PropTypes from 'prop-types'
import '../css/themecolor.css'
import image from '../images/settings.svg'
import { Link } from "react-router-dom";


export default function Navbar(props) {
  const [colorpicker,setColorpicker] = useState("show");
  const openColorPick = () => {
      if(colorpicker === "show")
      {
          setColorpicker("hide");

      }else{
        setColorpicker("show")
      }
  }
  return(
    <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/"  className="nav-link active">Home</Link>
              
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
           
           
          </ul>
          <div className={`theme-color ${colorpicker}`}>
            <input type="radio" className="button darkblue" name="background" onChange={() => props.changeBg("darkblue")}></input>
            <input type="radio" className="button darkpurple" name="background" onChange={() => props.changeBg("darkpurple")}></input>
            <input type="radio" className="button darkred" name="background" onChange={() => props.changeBg("darkred")}></input>
            <input type="radio"className="button darkskyblue" name="background" onChange={() => props.changeBg("darkskyblue")}></input>
            <input type="radio"className="button dark" name="background" onChange={() => props.changeBg("dark")}></input>
            <input type="radio"className="button light" name="background" onChange={() => props.changeBg("light")}></input>
          </div>
          
          <button className="setting-button" data-toggle="tooltip" data-placement="left" title="Tooltip on left" onClick={openColorPick}><img src={image} alt="setting" ></img></button> 
         
        </div>
      </div>
    </nav>
  );
  
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired  // Is Required Use  Or Set Prop type as string 
}



// This is the example of  Default Props Which is use 
// when we do not set props but wants to display some Random  text defaulty

// Navbar.defaultProps = {
//   title: "Set title here" 
// };
