import React from "react";
import logo from "../images/logo.png"
export default function TopBar(){
    return(
        <div className="bar">
        <span className="barText" style={{fontFamily:"wagamama", fontWeight:"10"}}>CBRE</span>
        <img src={logo} className="barImage" alt="logo" height={100} />
        </div>
    )
}
