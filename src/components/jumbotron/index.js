import React from "react";
import "./index.css";

export default function Jumbotron() {
    return(
        <>
            <div className="container-jumbotron">
                <div className="paragraph">
                    <h1>Delicius food delivery service</h1>
                    <p>If you food lover, our sevice is for you. Delicius food anytime, everywhere.</p>
                    <button className="view-menu">
                        VIEW MENU
                    </button>
                </div>
            </div>
        </>
    );
};