import './App.css';
import TopBar from './mainPageComponents/TopBar';
import SideBar from './mainPageComponents/SideBar';
import DisplayTab from './mainPageComponents/DisplayTab';
import React from 'react';

function App() {
  let [currState, setState] = React.useState("TrackSentiment");
  return(
    <div>
      <TopBar />
      <SideBar setState = {setState}/>
      <DisplayTab currState={currState}/>
    </div>
  );
}

export default App;