import React from "react";

export default function Card(props) {
    return(
        <div className="card">
            <h1>TARRIF {props.title}</h1>
            <h3>Hours: {props.schedules[0]} {props.schedules[1]}</h3>
            <h3>Delivery: {props.delivery}</h3>
            <h2>{props.freeWith}</h2>
            <button className="order-now">ORDER NOW</button>
        </div>        
    );
};