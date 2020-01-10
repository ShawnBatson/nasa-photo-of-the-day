import React, { useState, useEffect } from "react";

const PicsCard = props => {
  return (
    <div className="cardStock">
      <h1 className="title">{props.title}</h1>
      <h6 className="date">{props.date}</h6>
      <h5 className="explanation">{props.explanation}</h5>
      <div className="image">
        <img className="imageStock" src={props.url} alt="nasa second" />
      </div>
    </div>
  );
};

export default PicsCard;
