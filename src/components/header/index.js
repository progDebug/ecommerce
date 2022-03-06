import React from "react";
import "./index.css";

export default function header() {
    return(
        <header>
            <div className="left">
                <div className="title">
                    <h1>Project 5</h1>
                </div>
                <menu className="menu">
                    <ul className="list">
                        <li><a href="#men">Home</a></li>
                        <li><a href="#men">Menu</a></li>
                        <li><a href="#men">Delivery</a></li>
                        <li><a href="#men">Services</a></li>
                        <li><a href="#men">Contact</a></li>
                    </ul>
                </menu>
            </div>
            <div className="right">
                <ul className="list">
                    <li className="login"><a href="#men">Log in</a></li>
                    <li className="registration"><a href="#men">Registration</a></li>
                </ul>
            </div>
        </header>
    )
};