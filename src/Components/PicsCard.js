import React, { useState, useEffect} from "react";
import PictureList from "./Main"; /* this may have to change*/


const PicsCard = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h6>{props.date}</h6>
            <h5>Reason: {props.explanation}</h5>
            <img src={props.hdurl} alt="nasa first" />
            <img src={props.url} alt="nasa second" />
        </div>

    )

}


export default PicsCard