import React from "react";
//import wands from "./wands.js";

function WandsCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card" style={{ width: "18rem" }}>
        <div className="image">
          <img
            className="card-img-top"
            src={props.item.imageUrl}
            alt={props.item.core}
          />
        </div>
        <div
          className="card-body"
          style={{
            backgroundColor: "#F2EEBB",
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: "1px 1px 1px 1px"
          }}
        >
          <h2
            className="card-title"
            style={{ color: "black", textAlign: "center" }}
          >
            <span>
              <b>{props.item.core}</b>
            </span>
          </h2>
          <h6
            className="card-text"
            style={{ color: "black", textAlign: "center" }}
          >
            <b>{"Wood: "}</b> {props.item.wood} <br></br> <b>{"Length: "}</b>{" "}
            {props.item.length}
          </h6>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default WandsCard;
