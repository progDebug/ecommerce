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
            <menu className="menu-droper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                <ul className="list">
                    <li><a href="#men">Home</a></li>
                    <li><a href="#men">Menu</a></li>
                    <li><a href="#men">Delivery</a></li>
                    <li><a href="#men">Services</a></li>
                    <li><a href="#men">Contact</a></li>
                </ul>
            </menu>            
        </header>
    )
};