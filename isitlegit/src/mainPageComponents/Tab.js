import React from "react";
export default function Tab(input){
    
    return(
        <div className="tab" >
            <img src={input.tabIcon} alt="tabIcon" />
            {input.tabName}
        </div>
    )
}