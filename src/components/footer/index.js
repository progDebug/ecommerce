import React from "react";
import "./index.css";

export default function Footer() {
    return(
        <>
            <footer className="footer">
                <div className="section-one">
                    <h3 className="project5">PROJECT 5</h3>
                    <div className="place">
                        <h3>Georgia, Tbilisi <br /> Kakheti highway 23</h3>
                    </div>
                    <h3>2022 All rights reserved</h3>
                </div>
                <div className="section-two">
                    <div className="menu">
                        <ul>
                            <li><a href="#e">About us</a></li>
                            <li><a href="#e">Menu</a></li>
                            <li><a href="#e">Profile</a></li>
                            <li><a href="#e">Delivery</a></li>
                            <li><a href="#e">Customers feedback</a></li>
                            <li><a href="#e">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="section-three">
                    <h3>Newsletter</h3>
                    <div className="input">
                        <input className="enter-email" placeholder="Enter your e-mail"></input>
                        <button className="join-now">JOIN NOW</button>
                    </div>
                </div>
            </footer>
        </>
    );  
};