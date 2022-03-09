import React from "react";
import Deliverymen from "../../assets/images/deliveryman.jpg";
import Cart from "../../assets/images/shopping-cart.jpg";
import "./index.css";

export default function Delivery() {
    return(
        <>
            <div className="container-delivery">
                <img src={Deliverymen} alt="Deliveryman" className="deliveryman"></img>
                <div className="text">
                    <h3>How it works?</h3>
                    <h1>We deliver anytime,<br /> everywhere in tblisi</h1>
                    <p>If you food lover, our service is for you.<br></br> Delicius food anytime, everywhere.</p>
                </div>
                <div className="buttons">
                </div>
            </div>
        </>
    );
};