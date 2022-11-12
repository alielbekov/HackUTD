import './App.css';
import TopBar from './mainPageComponents/TopBar';
import SideBar from './mainPageComponents/SideBar';
import DisplayTab from './mainPageComponents/DisplayTab';
import React from 'react';
import axios from 'axios';

let api = axios.create({
  baseURL: "http://localhost:5000/login",
})

let config = {
  headers: {
     'Content-Type': 'application/json',
  } 
}

//
let newSession = true;
//

function App() {
  let [isSignedIn, setSignedIn] = React.useState(true);

  let [currState, setState] = React.useState("Home");

  let [userInfo, setUserInfo] = React.useState({"username":""});

  async function getInput(){
    let username = userInfo.username;
    let uinfo= await api.post('/', {"username":username}, config)
    .then(response=> (response.data))
    return uinfo
  }
  
  function logIn(){
    if(isSignedIn)
    {  
      newSession = false;
      async function f(){
      setUserInfo(await getInput())
    }

      f()
      
      return (
        <div>
          <TopBar />
          <SideBar setState = {setState}/>
          <DisplayTab currState={currState} userInfo={userInfo}/> 
        </div>
      );}
    else if(isSignedIn)
    {  
      return (
        <div>
          <TopBar />
          <SideBar setState = {setState}/>
          <DisplayTab currState={currState} userInfo={userInfo}/> 
        </div>
      );}
  }
  return(
    <>
      {logIn()}
    </>
  )
}

export default App;