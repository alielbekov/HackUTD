import React from "react";
export default function MyEvents(input){

    function printEvents(eventArray){
        return eventArray.map(({dates, eventNames}) => <tr><td>{eventNames}</td> <td>{dates}</td></tr>)
    }

    function getEvents(eventArray){
        if(!eventArray)
            return "No Events Found"
        else {
            return (<table><tr> <th>Event Names</th> <th>Date</th> </tr> {printEvents(eventArray)}</table>)
        }
    }

    return(
        <div>
            <div className="titleText">
                Upcoming Events:
                <div className="contentText">
                    {getEvents(input.userinfo.events)}
                </div>
            </div>
        </div>
    )
}