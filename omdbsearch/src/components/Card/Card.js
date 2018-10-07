import React from "react";
import "./Card.css";

var Card = props => (
    <div className="card">
        <div className="card-header">
            <h2>{props.heading}</h2>
        </div>
        <div className="card-body">{props.children}</div>
    </div>
);

export default Card;