import React from "react";
export default function Home(input){
    
    return(
        <div>
            <div className="titleText">
                Welcome {input.userinfo.name}, select the tab to the left to choose where you want to go.
            </div>
        </div>
    )
}