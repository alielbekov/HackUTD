import React from "react";
import logo from "../images/logo.png"
export default function TopBar(){
    return(
        <div className="bar">
            <img src={logo} className="barImage" alt="logo" height={100}/>
            <span className="barText">Sportal</span> 
        </div>
    )
}