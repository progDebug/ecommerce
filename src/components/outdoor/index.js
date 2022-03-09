import React from "react";
import Button from "../button/index.js";
import "./index.css";

export default function Outdoor() {
    return(
        <>
            <div className="container-outdoor">
                <h1 className="title">Order today and get <span>30 %</span> off</h1>
                <Button title="order with discount" fontSize="18pt"/>
            </div>
        </>
    );
};