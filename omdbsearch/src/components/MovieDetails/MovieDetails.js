import React from "react";
import "./MovieDetails.css";

const MovieDetails = props =>   (
    <div className="text-left">
        <center>
        <img
            alt={props.title}
            className="img-fluid"
            src={props.src}
        />
        </center>
        <h3>Director/s: {props.director}</h3>
        <h3>Genre: {props.genre}</h3>
        <h3>Release Date: {props.released}</h3>
    </div>
);

export default MovieDetails;