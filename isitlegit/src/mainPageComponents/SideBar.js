import React from "react";
import Tab from "./Tab";


export default function SideBar(input){

    return(
        <>
            <div className="sideBar">
                <div onClick={() => input.setState("SocialMedia")}>
                <Tab tabName="Social Media Post"/>
                </div>
                <div onClick={() => input.setState("Survey")}>
                <Tab tabName="Survey" />
                </div>
                <div onClick={() => input.setState("Review")}>
                <Tab tabName="Review"/>
                </div> <div onClick={() => input.setState("TrackSentiment")}>
                <Tab tabName="Sentiment Tracker"/>
                </div>
            </div>
        </>
    )
}
