import React from "react";

export default function Teams(input){

    function getTeams(teamsArray){
        if(!teamsArray || !teamsArray.length)
            return "No Teams Found"
        else{
            return teamsArray.map(team => <div>{team}</div>)
        }
    }

    function joinTeam(){
        return(
        <>
            <input className ="searchBox" type="search" id="search" placeholder="Type the team id here" autoComplete="off" autoCapitalize="none" tabIndex="0" spellCheck="false" maxLength={20}/>
            <button className="searchButton" id="enterTeamSearch" alt="." onClick={() => searchTeam()}/>
        </>
        )
    }

    function searchTeam(){
        console.log(document.getElementById("search").value);
    }

    return(
        <div>
            <div className="titleText">
                Join a team:
            </div>
            <div className="searchField">
                {joinTeam()}
            </div>
            <br/>
            <div className="titleText">
                My Teams:
            </div>
            <div className="contentText">
                {getTeams(input.userinfo.teams)}
            </div>
        </div>
    )
}