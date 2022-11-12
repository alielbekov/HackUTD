import React from "react";
import Review from "./differentDisplays/Review";
import SocialMedia from "./differentDisplays/SocialMedia";
import Survey from "./differentDisplays/Survey";
import TrackSentiment from "./differentDisplays/TrackSentiment";

export default function DisplayTab(currTab){
    // delegate display to show
    // make css, such as the content tab's css, and css for individual tabs
    function show (currState){
        switch(currState){
            case "SocialMedia": 
                return <SocialMedia />
            case "Survey": 
                return <Survey />
            case "Review": 
                return <Review />
            case "TrackSentiment": 
                return <TrackSentiment />
            default: return "Error in displaying tab"
        }
    }
    return(
        <div className="mainDisplay"> 
            {show(currTab.currState)}
        </div>
    )
}