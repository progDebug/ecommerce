import React from "react";
import "./index.css";

export default function Button(props) {
    return(
        <button className="view-menu" style={{fontSize:props.fontSize}}>{props.title}</button>        
    );
};