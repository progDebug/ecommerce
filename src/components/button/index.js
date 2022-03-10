import React from "react";
import "../button/index.css";

export default function Button(props) {
    return(
        <button className={props.type === "light"?"order-now":"view-menu"} style={{fontSize:props.fontSize}}>{props.title}</button>        
    );
};