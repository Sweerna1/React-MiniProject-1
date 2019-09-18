import React from "react";
//import wands from "./wands";
import WandsCard from "./WandsCard";

function WandsList(props) {
  const wandsArray = props.wands.map(wand => (
    <WandsCard item={wand} key={wand.core} />
  ));
  return (
    <div className="container">
      <div className="row">{wandsArray}</div>
      <br></br>
    </div>
  );
}

export default WandsList;
