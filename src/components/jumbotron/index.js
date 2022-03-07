import React from "react";
import "./index.css";
import Button from "../button/index.js";

export default function Jumbotron() {
    return(
        <>
            <div className="container-jumbotron">
                <div className="paragraph">
                    <h1>Delicius food delivery service</h1>
                    <p>If you food lover, our sevice is for you. Delicius food anytime, everywhere.</p>
                    <Button />
                </div>
            </div>
        </>
    );
};