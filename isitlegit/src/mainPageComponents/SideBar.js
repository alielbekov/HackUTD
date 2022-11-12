import React from "react";
import Tab from "./Tab";
import calendarIcon from "../images/calendarIcon.png"
import goalsIcon from "../images/goalsIcon.png"
import homeIcon from "../images/homeIcon.png"
import settingsIcon from "../images/settingsIcon.png"
import teamsIcon from "../images/teamsIcon.png"


export default function SideBar(input){
    
    return(
        <>
            <div className="sideBar">
                <div onClick={() => input.setState("Home")}>
                <Tab tabName="Home" tabIcon={homeIcon}/>
                </div>
                <div onClick={() => input.setState("Goals")}>
                <Tab tabName="Goals" tabIcon={goalsIcon}/>
                </div>
                <div onClick={() => input.setState("Teams")}>
                <Tab tabName="Teams" tabIcon={teamsIcon}/>
                </div>
                <div onClick={() => input.setState("Events")}>
                <Tab tabName="Events" tabIcon={calendarIcon}/>
                </div>
                <div onClick={() => input.setState("Settings")}>
                <Tab tabName="Settings" tabIcon={settingsIcon}/>
                </div>
            </div>
        </>
    )
}