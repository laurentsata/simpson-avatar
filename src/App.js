import React from "react";
import Avatar from "./Avatar.js";
import "./App.css";

function App(){
  return (
  
  <div>
    <h1 className="text-center">Atelier</h1>

    <div className="App">
      <div className="App">
        <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2242-bart-simpson-bartman.png" firstName="Bart" lastName="sIMPSON"/>
        <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png" firstName="Homer" lastName="SIMPSON" />
        <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png" firstName="Lisa" lastName="SIMPSON"  />
        <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png" firstName="Marge" lastName="SiMPSON" />
        <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png" firstName="Maggie" lastName="SIMpSON" />
      </div>
    </div>
  </div>
);
}

export default App