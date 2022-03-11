import React from "react";
import "./index.css";

export default function Chefs() {
    return(
        <>
            <div className="container-chefs">
                <h1 className="our-chefs">Our chefs</h1>
                <div className="chefs">
                    <div className="chef">
                        <div className="img1" id="img"></div>
                        <div className="about-chef">
                            <h3 className="name-chef">Marine Akhmeteli</h3>
                            <h3 className="classification-chef">Senior Chef</h3>
                        </div>
                    </div>
                    <div className="chef" >
                        <div className="img2" id="img"></div>
                        <div className="about-chef">
                            <h3 className="name-chef">Sandro Aftsiuri</h3>
                            <h3 className="classification-chef">Senior Chef</h3>
                        </div>
                    </div>
                    <div className="chef">
                        <div className="img3" id="img"></div>
                        <div className="about-chef">
                            <h3 className="name-chef">Lee Mung</h3>
                            <h3 className="classification-chef">Senior Chef</h3>
                        </div>
                    </div>
                    <div className="chef">
                        <div className="img4" id="img"></div>
                        <div className="about-chef">
                            <h3 className="name-chef">Vano Berulava</h3>
                            <h4 className="classification-chef">Senior Chef</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};