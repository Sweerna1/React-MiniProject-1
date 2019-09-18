import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import wands from "./wands.js";
import WandsList from "./WandsList";

function App() {
  return (
    <div className="background-img">
      <br></br>
      <br></br>

      <h1
        style={{
          fontFamily: "Dancing Script",
          marginTop: "25px",
          fontSize: "100px",
          color: "white",
          textAlign: "center"
        }}
      >
        Ollivander's Wand Shop
      </h1>
      <br></br>
      <br></br>
      <WandsList wands={wands} />
    </div>
  );
}

export default App;
